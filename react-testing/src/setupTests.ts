import '@testing-library/jest-dom';

// vitest.setup.ts
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../src/components/mocks/server'
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())