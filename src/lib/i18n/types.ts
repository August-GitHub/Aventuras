export type Locale = 'zh-CN' | 'en-US'

export interface TranslationKeys {
  common: {
    save: string
    cancel: string
    done: string
    close: string
    back: string
    next: string
    loading: string
    error: string
    success: string
    warning: string
    info: string
  }

  header: {
    library: string
    gallery: string
    importExport: string
    settings: string
    returnToLibrary: string
    viewGeneratedImages: string
    importExportStory: string
    joinDiscord: string
    showSidebar: string
    hideSidebar: string
  }

  sidebar: {
    characters: string
    locations: string
    inventory: string
    quests: string
    time: string
    branches: string
    story: string
    lorebook: string
    memory: string
  }

  welcome: {
    title: string
    subtitleInterface: string
    subtitleSelect: string
    subtitleConfigure: string
    theme: string
    fontSize: string
    translation: string
    targetLanguage: string
    translateUserInput: string
    translateWorldState: string
    nextStep: string
    backToCustomization: string
    setup: string
    apiKey: string
    getKey: string
    getStarted: string
    settingUp: string
    openrouter: string
    openrouterDesc: string
    nanogpt: string
    nanogptDesc: string
    custom: string
    customDesc: string
  }

  story: {
    actions: string
    suggestions: string
    writeAction: string
    send: string
    retry: string
    retryLast: string
    continueStory: string
    noStory: string
    startNewStory: string
    storyTitle: string
    wordCount: string
    generating: string
    analyzing: string
    imageGeneration: string
  }

  settings: {
    title: string
    description: string
    api: string
    generation: string
    interface: string
    images: string
    tts: string
    advanced: string
    experimental: string
    story: string
    resetAll: string
    resetConfirm: string
    resetDescription: string
  }

  lorebook: {
    title: string
    entries: string
    addEntry: string
    editEntry: string
    deleteEntry: string
    import: string
    export: string
    search: string
    filterByType: string
    sortBy: string
    name: string
    type: string
    updated: string
    all: string
    character: string
    location: string
    item: string
    faction: string
    concept: string
    event: string
    keywords: string
    aliases: string
    content: string
    state: string
    visibility: string
    secret: string
    active: string
    inactive: string
  }

  memory: {
    title: string
    chapters: string
    newChapter: string
    editChapter: string
    deleteChapter: string
    resummarize: string
    chapterTitle: string
    chapterSummary: string
    chapterDate: string
    wordCount: string
    tokenCount: string
    settings: string
    manualChapter: string
    memoryLoading: string
  }

  world: {
    character: string
    characters: string
    location: string
    locations: string
    item: string
    items: string
    quest: string
    quests: string
    time: string
    relationships: string
    inventory: string
    equipment: string
    completed: string
    inProgress: string
    milestones: string
    revelations: string
    plotPoints: string
  }

  export: {
    aventuras: string
    markdown: string
    plainText: string
    exported: string
    exportCancelled: string
    exportFailed: string
    importSTChat: string
  }

  toast: {
    exportedStory: string
    exportCancelled: string
    exportFailed: string
    generationFailed: string
    unknownError: string
  }

  errors: {
    apiKeyRequired: string
    initializationFailed: string
    noCurrentStory: string
  }
}