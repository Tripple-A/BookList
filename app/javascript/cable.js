import { createCable } from '@anycable/web'
// or for non-web projects
// import { createCable } from '@anycable/core'

export default createCable({protocol: 'actioncable-v1-ext-json'})