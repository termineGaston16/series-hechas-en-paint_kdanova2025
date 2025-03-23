import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true, // ✅ habilita describe, expect, it sin imports
        environment: 'jsdom', // ✅ simula navegador para React
        setupFiles: './src/setupTests.ts', // ✅ importa jest-dom automáticamente
        exclude: [...configDefaults.exclude],
    },
})
