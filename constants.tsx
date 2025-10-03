import React from 'react';
import type { SettingsState, ChatSession } from './types';
import { Theme, AccentColor, GradientStyle, BubbleStyle, Font, CornerRadius, Density, AIPersona, AITone } from './types';

import { UserCircleIcon } from './components/icons/UserCircleIcon';
import { BoltIcon } from './components/icons/BoltIcon';
import { BrainIcon } from './components/icons/BrainIcon';
import { CodeIcon } from './components/icons/CodeIcon';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { BotIcon } from './components/icons/BotIcon';
import { WandIcon } from './components/icons/WandIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { SparkleIcon } from './components/icons/SparkleIcon';
import { EmojiIcon } from './components/icons/EmojiIcon';
import { MoonIcon } from './components/icons/MoonIcon';
import { PaletteIcon } from './components/icons/PaletteIcon';
import { MicIcon } from './components/icons/MicIcon';

export const GEMINI_API_KEY = "AIzaSyBMofqVUrjk-p6wSFX_6yk34Wp12Fa2A1k";

export const ACCENT_COLORS: Record<AccentColor, string> = {
  [AccentColor.Violet]: '139 92 246', // violet-500
  [AccentColor.Cyan]: '6 182 212',   // cyan-500
  [AccentColor.Emerald]: '16 185 129', // emerald-500
  [AccentColor.Rose]: '244 63 94',    // rose-500
  [AccentColor.Amber]: '245 158 11',  // amber-500
  [AccentColor.Blue]: '59 130 246',   // blue-500
  [AccentColor.Fuchsia]: '217 70 239', // fuchsia-500
};

export const GRADIENT_STYLES: Record<GradientStyle, string> = {
  [GradientStyle.Twilight]: 'from-gray-900 via-purple-900 to-violet-600',
  [GradientStyle.Ocean]: 'from-cyan-500 to-blue-500',
  [GradientStyle.Forest]: 'from-green-400 to-emerald-600',
  [GradientStyle.Sunset]: 'from-amber-400 via-orange-500 to-red-600',
  [GradientStyle.Ice]: 'from-blue-200 via-cyan-200 to-white',
  [GradientStyle.Magma]: 'from-red-500 via-rose-700 to-black',
  [GradientStyle.Aurora]: 'from-blue-400 via-emerald-400 to-yellow-300',
  [GradientStyle.Mojave]: 'from-yellow-200 via-red-500 to-fuchsia-500',
  [GradientStyle.Cosmic]: 'from-gray-700 via-gray-900 to-black',
  [GradientStyle.Sakura]: 'from-pink-300 via-purple-300 to-indigo-400',
  [GradientStyle.EmeraldWater]: 'from-emerald-500 to-teal-700',
  [GradientStyle.Royal]: 'from-indigo-500 via-purple-500 to-pink-500',
  [GradientStyle.GoldenHour]: 'from-orange-300 via-rose-300 to-fuchsia-400',
  [GradientStyle.Nebula]: 'from-purple-800 via-indigo-900 to-blue-900',
  [GradientStyle.Peachy]: 'from-red-200 via-red-300 to-yellow-200',
  [GradientStyle.Grape]: 'from-fuchsia-600 to-purple-600',
  [GradientStyle.MistyMorning]: 'from-gray-300 via-gray-400 to-gray-500',
  [GradientStyle.Volcano]: 'from-orange-600 via-red-700 to-gray-900',
  [GradientStyle.DeepSpace]: 'from-blue-900 to-black',
  [GradientStyle.Lavender]: 'from-purple-400 to-indigo-500',
  [GradientStyle.Coral]: 'from-rose-400 to-orange-300',
  [GradientStyle.Minty]: 'from-green-200 to-cyan-200',
  [GradientStyle.CherryBlossom]: 'from-pink-200 to-rose-300',
  [GradientStyle.NightSky]: 'from-indigo-800 to-gray-900',
  [GradientStyle.SunnyDay]: 'from-yellow-300 to-orange-400',
  [GradientStyle.Amethyst]: 'from-violet-500 to-fuchsia-700',
  [GradientStyle.CyberGlow]: 'from-pink-500 via-purple-600 to-cyan-400',
  [GradientStyle.MangoSunrise]: 'from-yellow-400 via-orange-500 to-red-500',
  [GradientStyle.AquaMarine]: 'from-green-200 via-cyan-300 to-blue-400',
  [GradientStyle.PurpleHaze]: 'from-indigo-500 via-purple-500 to-pink-400',
  [GradientStyle.CosmicFusion]: 'from-purple-900 via-blue-800 to-gray-900',
  [GradientStyle.DesertMirage]: 'from-amber-300 via-orange-400 to-yellow-500',
  [GradientStyle.EmeraldIsle]: 'from-emerald-400 to-green-600',
  [GradientStyle.RubyFire]: 'from-red-600 via-rose-600 to-red-800',
  [GradientStyle.SapphireSea]: 'from-blue-600 to-indigo-800',
  [GradientStyle.ElectricDream]: 'from-cyan-400 to-fuchsia-500',
  [GradientStyle.CottonCandy]: 'from-pink-300 via-blue-300 to-purple-300',
  [GradientStyle.LushJungle]: 'from-lime-400 via-green-500 to-teal-600',
  [GradientStyle.MysticRiver]: 'from-gray-500 via-blue-900 to-black',
  [GradientStyle.SolarFlare]: 'from-yellow-300 via-orange-500 to-red-700',
  [GradientStyle.Starlight]: 'from-gray-200 via-blue-100 to-gray-400',
  [GradientStyle.CrimsonNight]: 'from-red-800 via-rose-900 to-black',
  [GradientStyle.Malibu]: 'from-sky-400 to-cyan-300',
  [GradientStyle.Miami]: 'from-orange-400 via-pink-500 to-purple-500',
  [GradientStyle.BlueLagoon]: 'from-cyan-200 to-emerald-400',
  [GradientStyle.Orion]: 'from-blue-700 via-indigo-800 to-purple-900',
  [GradientStyle.Andromeda]: 'from-fuchsia-800 via-pink-900 to-violet-900',
  [GradientStyle.PlumVelvet]: 'from-purple-600 to-indigo-700',
  [GradientStyle.RoseGold]: 'from-rose-200 to-amber-300',
  [GradientStyle.Kiwi]: 'from-lime-300 to-green-400',
  [GradientStyle.Lemonade]: 'from-yellow-200 to-lime-200',
  [GradientStyle.Grapefruit]: 'from-pink-400 to-orange-400',
  [GradientStyle.FireOpal]: 'from-amber-500 via-red-600 to-orange-700',
  [GradientStyle.AzurePop]: 'from-blue-400 to-sky-300',
  [GradientStyle.TequilaSunrise]: 'from-orange-500 to-yellow-300',
  [GradientStyle.Mojito]: 'from-lime-200 via-green-300 to-emerald-400',
  [GradientStyle.BlueRaspberry]: 'from-cyan-500 to-fuchsia-600',
  [GradientStyle.Bubblegum]: 'from-pink-400 to-rose-400',
  [GradientStyle.RainbowSherbet]: 'from-orange-300 via-lime-300 to-cyan-300',
  [GradientStyle.MidnightPlum]: 'from-gray-800 to-purple-900',
  [GradientStyle.WinterIce]: 'from-sky-200 to-blue-300',
  [GradientStyle.AutumnVibes]: 'from-amber-600 via-orange-700 to-red-900',
  [GradientStyle.SpringMeadow]: 'from-green-300 via-yellow-200 to-lime-400',
  [GradientStyle.OceanDepths]: 'from-teal-700 via-blue-900 to-gray-900',
  [GradientStyle.Supernova]: 'from-rose-500 via-red-600 to-purple-800',
  [GradientStyle.Galaxy]: 'from-indigo-900 via-purple-900 to-black',
  [GradientStyle.Iridescent]: 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900',
  [GradientStyle.Holographic]: 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-emerald-500 to-fuchsia-500',
  [GradientStyle.PastelRainbow]: 'from-pink-300 via-purple-300 to-blue-300',
  [GradientStyle.Vivid]: 'from-red-500 via-yellow-500 to-green-500',
  [GradientStyle.Monochrome]: 'from-gray-400 to-gray-600',
  [GradientStyle.Earth]: 'from-green-600 via-blue-700 to-amber-800',
  [GradientStyle.Candy]: 'from-rose-400 via-fuchsia-500 to-indigo-500',
  [GradientStyle.FairyFloss]: 'from-pink-300 to-indigo-300',
  [GradientStyle.Dreamy]: 'from-purple-400 via-pink-400 to-blue-400',
  [GradientStyle.Goldenrod]: 'from-yellow-400 to-amber-500',
};


export const DEFAULT_SETTINGS: SettingsState = {
  theme: Theme.Dark,
  accentColor: AccentColor.Violet,
  gradientStyle: GradientStyle.Twilight,
  glassIntensity: 5, // 1-10 scale
  bubbleStyle: BubbleStyle.Glass,
  font: Font.Inter,
  cornerRadius: CornerRadius.XXL,
  density: Density.Comfortable,
  backgroundStars: true,
  shadows: true,
  sendOnEnter: true,
  autoScroll: true,
  aiMemory: true,
  aiTypingSpeed: 25, // ms per character
  smartSuggestions: true,
  saveHistory: true,
  spellCheck: true,
  markdownSupport: true,
  codeWrap: true,
  linkPreviews: true,
  inlineImages: false,
  showTimestamps: true,
  showAvatars: true,
  noiseOverlay: true,
  quickActions: true,
  emojiPicker: true,
  profanityFilter: false,
  autoCapitalization: true,
  pinnedTools: ['Search', 'Calculator'],
  userName: 'Guest',
  userAvatar: null,
  aiPersona: AIPersona.Normal,
  aiTone: AITone.Friendly,
  chatActionsOrder: ['deep-search', 'persona', 'attach', 'mic', 'emoji'],
  sidebarWidth: 288, // Increased default width for new components
  sidebarOrder: ['chat', 'news', 'image-gen', 'video-gen', 'studio', 'files', 'calendar', 'events', 'alarm', 'history', 'settings'],
  hyperMode: false,
};

export const cornerRadiusMap: Record<CornerRadius, string> = {
  [CornerRadius.MD]: 'rounded-md',
  [CornerRadius.XL]: 'rounded-xl',
  [CornerRadius.XXL]: 'rounded-2xl',
  [CornerRadius.XXXL]: 'rounded-3xl',
};

export const densityMap: Record<Density, { p: string; itemPadding: string; spaceY: string; }> = {
  [Density.Compact]:    { p: 'p-2 md:p-3', itemPadding: 'p-2', spaceY: 'space-y-2' },
  [Density.Comfortable]:{ p: 'p-4 md:p-6', itemPadding: 'p-4', spaceY: 'space-y-4' },
  [Density.Spacious]:   { p: 'p-6 md:p-8', itemPadding: 'p-5', spaceY: 'space-y-6' },
};

export const INITIAL_SESSION: Omit<ChatSession, 'id' | 'lastUpdated' | 'title'> = {
    messages: [
        { id: 1, text: "Hello! I'm Novai, your personal AI Assistant powered by Gemini. How can I assist you today? You can type `/help` to see available commands.", sender: 'ai', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), aiPersona: AIPersona.Normal, aiTone: AITone.Friendly }
    ]
};

// FIX: Completed the AI_PERSONA_CONFIG object to fix type errors and add missing personas.
export const AI_PERSONA_CONFIG: Record<AIPersona, { label: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; config: any }> = {
    [AIPersona.Normal]: {
        label: 'Normal',
        icon: UserCircleIcon,
        config: {},
    },
    [AIPersona.Fast]: {
        label: 'Fast',
        icon: BoltIcon,
        config: { thinkingConfig: { thinkingBudget: 0 } },
    },
    [AIPersona.Expert]: {
        label: 'Expert',
        icon: BrainIcon,
        config: {
            systemInstruction: "You are a world-class expert on the user's topic. Provide detailed, accurate, and in-depth information. Assume the user is also an expert and avoid basic explanations.",
        },
    },
    [AIPersona.Scripter]: {
        label: 'Scripter',
        icon: CodeIcon,
        config: {
            // NOTE: The main logic for this persona is a hard override in ChatWindow.tsx
            // to ensure the response format is strictly code.
             systemInstruction: 'You are an elite programmer AI. Your single and ONLY purpose is to provide production-ready, correct, and perfectly formatted code.',
        },
    },
    [AIPersona.Explainer]: {
        label: 'Explainer',
        icon: BookOpenIcon,
        config: {
            systemInstruction: 'You are a friendly and patient teacher. Explain complex topics in a simple, easy-to-understand way, using analogies and step-by-step breakdowns. Your goal is to make learning accessible and engaging.',
        },
    },
};

// FIX: Added missing AI_TONE_CONFIG object to resolve import errors.
export const AI_TONE_CONFIG: Record<AITone, { label: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; instruction: string }> = {
    [AITone.Friendly]: { label: 'Friendly', icon: EmojiIcon, instruction: 'Your tone should be warm, approachable, and friendly.' },
    [AITone.Professional]: { label: 'Professional', icon: BriefcaseIcon, instruction: 'Maintain a formal and professional tone.' },
    [AITone.Witty]: { label: 'Witty', icon: SparkleIcon, instruction: 'Be clever, witty, and use humor in your responses.' },
    [AITone.Academic]: { label: 'Academic', icon: BookOpenIcon, instruction: 'Use a scholarly and academic tone, citing sources if possible (conceptually).' },
    [AITone.Sarcastic]: { label: 'Sarcastic', icon: BotIcon, instruction: 'Employ sarcasm and dry wit, but don\'t be mean.' },
    [AITone.Enthusiastic]: { label: 'Enthusiastic', icon: BoltIcon, instruction: 'Be very enthusiastic, excited, and energetic!' },
    [AITone.Stoic]: { label: 'Stoic', icon: MoonIcon, instruction: 'Be stoic, calm, and matter-of-fact.' },
    [AITone.Poetic]: { label: 'Poetic', icon: PaletteIcon, instruction: 'Respond in a poetic, lyrical, and metaphorical manner.' },
    [AITone.Pirate]: { label: 'Pirate', icon: BotIcon, instruction: 'Talk like a swashbuckling pirate, shiver me timbers!' },
    [AITone.Shakespearean]: { label: 'Shakespearean', icon: BookOpenIcon, instruction: 'Speak in the style of William Shakespeare, with thee\'s and thou\'s.' },
    [AITone.NoirDetective]: { label: 'Noir Detective', icon: UserCircleIcon, instruction: 'Adopt the persona of a hardboiled noir detective from the 1940s. It was a dark and stormy night...' },
    [AITone.ValleyGirl]: { label: 'Valley Girl', icon: EmojiIcon, instruction: 'Talk like, oh my god, a totally awesome valley girl from the 80s. Like, for sure!' },
    [AITone.Robot]: { label: 'Robot', icon: BotIcon, instruction: 'Respond like a logical, emotionless robot. Bleep boop.' },
    [AITone.Philosopher]: { label: 'Philosopher', icon: BrainIcon, instruction: 'Ponder the user\'s query from a deep, philosophical perspective.' },
    [AITone.Gamer]: { label: 'Gamer', icon: BoltIcon, instruction: 'Use gamer slang and references. Talk about "GG", "pwned", and "leveling up".' },
    [AITone.Mysterious]: { label: 'Mysterious', icon: MoonIcon, instruction: 'Be enigmatic and mysterious, speaking in riddles and vague prophecies.' },
    [AITone.MotivationalCoach]: { label: 'Motivational Coach', icon: SparkleIcon, instruction: 'Be a motivational coach. Inspire the user to achieve their dreams!' },
    [AITone.HypeMan]: { label: 'Hype Man', icon: MicIcon, instruction: 'Be an energetic hype man! Get the user excited and pumped up!' },
    [AITone.ZenMaster]: { label: 'Zen Master', icon: MoonIcon, instruction: 'Respond with the calm wisdom of a Zen master. Find the emptiness in the query.' },
    [AITone.StandUpComedian]: { label: 'Stand-Up Comedian', icon: MicIcon, instruction: 'Act like a stand-up comedian. Try to find the humor in everything. What\'s the deal with...' },
    [AITone.GourmetChef]: { label: 'Gourmet Chef', icon: WandIcon, instruction: 'Speak with the passion and terminology of a world-class gourmet chef. Magnifique!' },
    [AITone.DrillSergeant]: { label: 'Drill Sergeant', icon: UserCircleIcon, instruction: 'Be a tough, no-nonsense drill sergeant. Drop and give me twenty!' },
    [AITone.Toddler]: { label: 'Toddler', icon: EmojiIcon, instruction: 'Respond with the simple curiosity and limited vocabulary of a toddler. "Why? Why? Why?"' },
    [AITone.SpaceCaptain]: { label: 'Space Captain', icon: BotIcon, instruction: 'Talk like the captain of a starship on a long voyage. "Make it so."' },
    [AITone.NewsAnchor]: { label: 'News Anchor', icon: BriefcaseIcon, instruction: 'Deliver your response with the formal, authoritative tone of a news anchor. "This just in..."' },
    [AITone.Cowboy]: { label: 'Cowboy', icon: UserCircleIcon, instruction: 'Talk like a cowboy from the Old West, partner. "Well, I reckon..."' },
    [AITone.Rapper]: { label: 'Rapper', icon: MicIcon, instruction: 'Respond with the rhythm and rhyme of a rapper. "Yo, check the mic one two..."' },
    [AITone.Vampire]: { label: 'Vampire', icon: MoonIcon, instruction: 'Speak like an ancient, elegant vampire. "I vant to answer your question."' },
    [AITone.ExcitedScientist]: { label: 'Excited Scientist', icon: BrainIcon, instruction: 'Respond with the boundless enthusiasm and technical jargon of a scientist on the verge of a breakthrough. "Eureka!"' },
    [AITone.Storyteller]: { label: 'Storyteller', icon: BookOpenIcon, instruction: 'Weave your response into a captivating story. "Once upon a time..."' },
};