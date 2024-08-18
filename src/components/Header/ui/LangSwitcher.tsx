import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const LANGUAGES = { EN: 'EN - English', UA: 'UA - Українська' }

export const LangSwitcher = () => {
  const [value, setValue] = useState('EN')
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className='w-[35px] border-0 bg-primary p-0 text-[13px] text-primary-foreground ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0'>
        <SelectValue>{value}</SelectValue>
      </SelectTrigger>
      <SelectContent className='space-y-[5px] rounded-[11px] bg-background px-[21px] py-3 shadow-[1px_1px_5px_0_rgba(78,78,78,0.19)]'>
        <SelectItem value='EN' className='text-[13px]'>
          {LANGUAGES.EN}
        </SelectItem>
        <SelectItem className='text-[13px]' value='UA'>
          {LANGUAGES.UA}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
