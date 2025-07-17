"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiationUtilities = exports.tiationAnimations = exports.tiationColors = exports.tiationTheme = void 0;
exports.tiationTheme = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
                cyan: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                    neon: '#00FFFF',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px #00FFFF' },
                    '50%': { boxShadow: '0 0 40px #00FFFF, 0 0 60px #00FFFF' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            animation: {
                glow: 'glow 2s ease-in-out infinite alternate',
                float: 'float 6s ease-in-out infinite',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
exports.tiationColors = {
    cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        neon: '#00FFFF',
    },
};
exports.tiationAnimations = {
    glow: 'glow 2s ease-in-out infinite alternate',
    float: 'float 6s ease-in-out infinite',
};
exports.tiationUtilities = {
    glow: 'animate-glow',
    float: 'animate-float',
    neon: 'text-cyan-neon',
    neonBg: 'bg-cyan-neon',
    neonBorder: 'border-cyan-neon',
    gradient: 'bg-gradient-to-br from-white via-cyan-50/30 to-white',
    gradientDark: 'bg-gradient-to-br from-gray-900 via-cyan-900/30 to-gray-900',
    card: 'bg-card text-card-foreground rounded-lg border shadow-sm',
    buttonPrimary: 'bg-cyan-neon hover:bg-cyan-600 text-black font-semibold animate-glow',
    buttonOutline: 'border-2 border-gray-300 text-gray-700 hover:border-cyan-neon hover:text-cyan-neon',
    badge: 'inline-flex items-center px-4 py-2 bg-cyan-neon/10 border border-cyan-neon/20 rounded-full text-cyan-700 text-sm font-medium',
    stat: 'text-3xl font-bold text-cyan-neon',
};
exports.default = exports.tiationTheme;
//# sourceMappingURL=index.js.map