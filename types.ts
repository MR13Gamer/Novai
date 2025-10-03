// FIX: Import Dispatch from React to resolve namespace error.
import type { Dispatch } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
  OLED = 'oled',
}

export enum AccentColor {
  Violet = 'violet',
  Cyan = 'cyan',
  Emerald = 'emerald',
  Rose = 'rose',
  Amber = 'amber',
  Blue = 'blue',
  Fuchsia = 'fuchsia',
}

export enum GradientStyle {
  Twilight = 'twilight',
  Ocean = 'ocean',
  Forest = 'forest',
  Sunset = 'sunset',
  Ice = 'ice',
  Magma = 'magma',
  Aurora = 'aurora',
  Mojave = 'mojave',
  Cosmic = 'cosmic',
  Sakura = 'sakura',
  EmeraldWater = 'emeraldWater',
  Royal = 'royal',
  GoldenHour = 'goldenHour',
  Nebula = 'nebula',
  Peachy = 'peachy',
  Grape = 'grape',
  MistyMorning = 'mistyMorning',
  Volcano = 'volcano',
  DeepSpace = 'deepSpace',
  Lavender = 'lavender',
  Coral = 'coral',
  Minty = 'minty',
  CherryBlossom = 'cherryBlossom',
  NightSky = 'nightSky',
  SunnyDay = 'sunnyDay',
  Amethyst = 'amethyst',
  CyberGlow = 'cyberGlow',
  MangoSunrise = 'mangoSunrise',
  AquaMarine = 'aquaMarine',
  PurpleHaze = 'purpleHaze',
  CosmicFusion = 'cosmicFusion',
  DesertMirage = 'desertMirage',
  EmeraldIsle = 'emeraldIsle',
  RubyFire = 'rubyFire',
  SapphireSea = 'sapphireSea',
  ElectricDream = 'electricDream',
  CottonCandy = 'cottonCandy',
  LushJungle = 'lushJungle',
  MysticRiver = 'mysticRiver',
  SolarFlare = 'solarFlare',
  Starlight = 'starlight',
  CrimsonNight = 'crimsonNight',
  Malibu = 'malibu',
  Miami = 'miami',
  BlueLagoon = 'blueLagoon',
  Orion = 'orion',
  Andromeda = 'andromeda',
  PlumVelvet = 'plumVelvet',
  RoseGold = 'roseGold',
  Kiwi = 'kiwi',
  Lemonade = 'lemonade',
  Grapefruit = 'grapefruit',
  FireOpal = 'fireOpal',
  AzurePop = 'azurePop',
  TequilaSunrise = 'tequilaSunrise',
  Mojito = 'mojito',
  BlueRaspberry = 'blueRaspberry',
  Bubblegum = 'bubblegum',
  RainbowSherbet = 'rainbowSherbet',
  MidnightPlum = 'midnightPlum',
  WinterIce = 'winterIce',
  AutumnVibes = 'autumnVibes',
  SpringMeadow = 'springMeadow',
  OceanDepths = 'oceanDepths',
  Supernova = 'supernova',
  Galaxy = 'galaxy',
  Iridescent = 'iridescent',
  Holographic = 'holographic',
  PastelRainbow = 'pastelRainbow',
  Vivid = 'vivid',
  Monochrome = 'monochrome',
  Earth = 'earth',
  Candy = 'candy',
  FairyFloss = 'fairyFloss',
  Dreamy = 'dreamy',
  Goldenrod = 'goldenrod',
}

export enum BubbleStyle {
  Glass = 'glass',
  Soft = 'soft',
  Flat = 'flat',
}

export enum Font {
  Inter = 'inter',
  Sora = 'sora',
  Manrope = 'manrope',
  Urbanist = 'urbanist',
}

export enum CornerRadius {
  MD = 'md',
  XL = 'xl',
  XXL = '2xl',
  XXXL = '3xl',
}

export enum Density {
  Compact = 'compact',
  Comfortable = 'comfortable',
  Spacious = 'spacious',
}

export enum AIPersona {
    Normal = 'normal',
    Fast = 'fast',
    Expert = 'expert',
    Scripter = 'scripter',
    Explainer = 'explainer',
}

export enum AITone {
    Friendly = 'friendly',
    Professional = 'professional',
    Witty = 'witty',
    Academic = 'academic',
    Sarcastic = 'sarcastic',
    Enthusiastic = 'enthusiastic',
    Stoic = 'stoic',
    Poetic = 'poetic',
    Pirate = 'pirate',
    Shakespearean = 'shakespearean',
    NoirDetective = 'noirDetective',
    ValleyGirl = 'valleyGirl',
    Robot = 'robot',
    Philosopher = 'philosopher',
    Gamer = 'gamer',
    Mysterious = 'mysterious',
    MotivationalCoach = 'motivationalCoach',
    HypeMan = 'hypeMan',
    ZenMaster = 'zenMaster',
    StandUpComedian = 'standUpComedian',
    GourmetChef = 'gourmetChef',
    DrillSergeant = 'drillSergeant',
    Toddler = 'toddler',
    SpaceCaptain = 'spaceCaptain',
    NewsAnchor = 'newsAnchor',
    Cowboy = 'cowboy',
    Rapper = 'rapper',
    Vampire = 'vampire',
    ExcitedScientist = 'excitedScientist',
    Storyteller = 'storyteller',
}

export interface SettingsState {
  theme: Theme;
  accentColor: AccentColor;
  gradientStyle: GradientStyle;
  glassIntensity: number;
  bubbleStyle: BubbleStyle;
  font: Font;
  cornerRadius: CornerRadius;
  density: Density;
  backgroundStars: boolean;
  shadows: boolean;
  sendOnEnter: boolean;
  autoScroll: boolean;
  aiMemory: boolean;
  aiTypingSpeed: number;
  smartSuggestions: boolean;
  saveHistory: boolean;
  spellCheck: boolean;
  markdownSupport: boolean;
  codeWrap: boolean;
  linkPreviews: boolean;
  inlineImages: boolean;
  showTimestamps: boolean;
  showAvatars: boolean;
  noiseOverlay: boolean;
  quickActions: boolean;
  emojiPicker: boolean;
  profanityFilter: boolean;
  autoCapitalization: boolean;
  pinnedTools: string[];
  userName: string;
  userAvatar: string | null;
  aiPersona: AIPersona;
  aiTone: AITone;
  chatActionsOrder: string[];
  sidebarWidth: number;
  sidebarOrder: string[];
  hyperMode: boolean;
}

export type SettingsAction = 
  | { type: 'SET_SETTING'; payload: { key: keyof SettingsState; value: any } }
  | { type: 'SET_STATE'; payload: SettingsState };

export interface SettingsContextType {
    settings: SettingsState;
    // FIX: Use imported Dispatch type instead of React.Dispatch to fix namespace error.
    dispatch: Dispatch<SettingsAction>;
}

export interface Attachment {
  type: 'image' | 'text';
  name: string;
  data: string; // base64 data url for images, or text content
  mimeType?: string;
}

export interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    url: string;
    channelTitle: string;
}

export interface SystemCommand {
    action: 'shutdown' | 'restart' | 'sleep' | 'lock';
    os: 'windows' | 'macos' | 'linux';
    command: string;
    instructions: string;
}

export interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp: string;
    attachment?: Attachment;
    avatar?: string | null;
    sources?: { uri: string; title: string; }[];
    isDeepSearch?: boolean;
    imageResults?: { link: string; title: string; }[];
    clipResults?: YouTubeVideo[];
    systemCommand?: SystemCommand;
    aiPersona?: AIPersona;
    aiTone?: AITone;
}

export interface ChatSession {
    id: string;
    title: string;
    messages: Message[];
    lastUpdated: number;
}

export interface StoredFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  data: string; // base64 data URL
  lastModified: number;
}

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description?: string;
  color: 'blue' | 'red' | 'green' | 'purple';
}

export interface Alarm {
  id: string;
  time: string; // HH:MM
  label: string;
  enabled: boolean;
}

export interface StudioUpload {
  id: string;
  userId: string; // 'currentUser' or a mock ID for others
  title: string;
  description: string;
  thumbnail: string; // base64 data URL
  file: StoredFile;
  visibility: 'public' | 'private';
  createdAt: number;
  uploaderName: string;
  uploaderAvatar: string;
  views: number;
  likes: number;
}

// FIX: Add User and Friend types to resolve type errors across the application.
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type FriendshipStatus = 'pending-sent' | 'pending-received' | 'friends';

export interface Friend extends User {
  friendshipStatus: FriendshipStatus;
}