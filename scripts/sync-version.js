#!/usr/bin/env node

/**
 * Version Sync Script
 * Automatically syncs version numbers across package.json, Cargo.toml, and tauri.conf.json
 * 
 * Usage:
 *   node scripts/sync-version.js
 *   node scripts/sync-version.js --bump <version>
 */

import fs from 'fs'
import path from 'path'

const packageJsonPath = path.join(process.cwd(), 'package.json')
const cargoTomlPath = path.join(process.cwd(), 'src-tauri/Cargo.toml')
const tauriConfPath = path.join(process.cwd(), 'src-tauri/tauri.conf.json')

function readPackageJsonVersion() {
  const content = fs.readFileSync(packageJsonPath, 'utf8')
  return JSON.parse(content).version
}

function readCargoTomlVersion() {
  const content = fs.readFileSync(cargoTomlPath, 'utf8')
  const match = content.match(/version = "([^"]+)"/)
  return match ? match[1] : null
}

function readTauriConfVersion() {
  const content = fs.readFileSync(tauriConfPath, 'utf8')
  return JSON.parse(content).version
}

function updatePackageJsonVersion(version) {
  const content = fs.readFileSync(packageJsonPath, 'utf8')
  const json = JSON.parse(content)
  json.version = version
  fs.writeFileSync(packageJsonPath, JSON.stringify(json, null, 2) + '\n')
}

function updateCargoTomlVersion(version) {
  const content = fs.readFileSync(cargoTomlPath, 'utf8')
  const updated = content.replace(/version = "[^"]+"/, `version = "${version}"`)
  fs.writeFileSync(cargoTomlPath, updated)
}

function updateTauriConfVersion(version) {
  const content = fs.readFileSync(tauriConfPath, 'utf8')
  const json = JSON.parse(content)
  json.version = version
  fs.writeFileSync(tauriConfPath, JSON.stringify(json, null, 2) + '\n')
}

function syncVersions() {
  const pkgVersion = readPackageJsonVersion()
  const cargoVersion = readCargoTomlVersion()
  const tauriVersion = readTauriConfVersion()

  console.log(`Current versions:`)
  console.log(`  package.json:  ${pkgVersion}`)
  console.log(`  Cargo.toml:    ${cargoVersion}`)
  console.log(`  tauri.conf.json: ${tauriVersion}`)

  const versions = [pkgVersion, cargoVersion, tauriVersion].filter(Boolean)
  const uniqueVersions = [...new Set(versions)]

  if (uniqueVersions.length === 1) {
    console.log('✅ All versions are already synchronized!')
    return
  }

  console.log('\n❌ Versions are not synchronized!')
  
  const mainVersion = pkgVersion || cargoVersion || tauriVersion
  
  console.log(`\nSyncing all files to version: ${mainVersion}`)
  
  updatePackageJsonVersion(mainVersion)
  updateCargoTomlVersion(mainVersion)
  updateTauriConfVersion(mainVersion)
  
  console.log('✅ All versions synchronized successfully!')
}

function bumpVersion(newVersion) {
  console.log(`Bumping version to: ${newVersion}`)
  
  updatePackageJsonVersion(newVersion)
  updateCargoTomlVersion(newVersion)
  updateTauriConfVersion(newVersion)
  
  console.log('✅ Version bumped successfully!')
}

// Parse command line arguments
const args = process.argv.slice(2)

if (args[0] === '--bump' && args[1]) {
  bumpVersion(args[1])
} else {
  syncVersions()
}