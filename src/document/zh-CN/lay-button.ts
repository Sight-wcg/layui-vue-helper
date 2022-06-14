import { ElDocument, DocumentAttribute } from '../../shared/types'

export const attributes: DocumentAttribute[] = [
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
]

export const document: ElDocument = { attributes }

export default document