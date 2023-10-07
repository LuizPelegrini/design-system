import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

// sets darkmode for storybook dashboard
addons.setConfig({
  theme: themes.dark
})