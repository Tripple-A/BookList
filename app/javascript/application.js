import '@hotwired/turbo'
import { start } from '@anycable/turbo-stream'
import { createCable } from '@anycable/web'

start(createCable({ protocol: 'actioncable-v1-ext-json' }))