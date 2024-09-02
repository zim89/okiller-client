import { useState } from 'react'
import { LANGUAGES } from '@/shared/config/i18next/constants.ts'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn-ui/select.tsx'
import i18n from 'i18next'

export const LangSwitcher = () => {
  // Initialize the state with the value from localStorage or default to 'EN'
  const initialLang = localStorage.getItem('language')?.toUpperCase() || 'EN'
  const [value, setValue] = useState(initialLang)
  const handleChangeLanguage = (newLang: keyof typeof LANGUAGES) => {
    setValue(newLang)
    const lngIsoCode = LANGUAGES[newLang][0]
    i18n.changeLanguage(lngIsoCode) // Change the language using i18n
    localStorage.setItem('language', newLang) // Save the selected language to localStorage
  }
  return (
    <Select value={value} onValueChange={handleChangeLanguage}>
      <SelectTrigger className='bg-primary text-primary-foreground hover:text-accent data-[state=open]:text-accent w-[35px] border-0 p-0 text-[13px] ring-0 ring-offset-0 transition-colors duration-300 focus:ring-0 focus:ring-offset-0'>
        <SelectValue>{value}</SelectValue>
      </SelectTrigger>
      <SelectContent className='bg-background space-y-[5px] rounded-[11px] px-[21px] py-3 shadow-[1px_1px_5px_0_rgba(78,78,78,0.19)]'>
        <SelectItem
          value='EN'
          className='focus:bg-background focus:text-accent data-[state=open]:text-accent cursor-pointer rounded-none text-[13px] font-medium transition-colors duration-300'
        >
          {LANGUAGES.EN[1]}
        </SelectItem>
        <SelectItem
          className='focus:bg-background focus:text-accent data-[state=open]:text-accent cursor-pointer rounded-none text-[13px] font-medium transition-colors duration-300'
          value='UA'
        >
          {LANGUAGES.UA[1]}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
