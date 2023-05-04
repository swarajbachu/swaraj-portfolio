import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'
import {codeInput} from '@sanity/code-input'



export default defineConfig({
  name: 'default',
  title: 'Swaraj Portfolio',

  projectId: 'c3dq0t2n',
  dataset: 'production',
  apiVersion: '2021-03-25',
  basePath: '/admin',

  plugins: [deskTool(),codeInput()],
  schema: { types: schemaTypes }

})
