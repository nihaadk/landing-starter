import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeMode } from '../enums/ThemeMode.enum'

export default function ThemeChangeButton() {
  const { systemTheme, setTheme, theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === ThemeMode.SYSTEM ? systemTheme : theme

  if (currentTheme === ThemeMode.DARK) {
    return (
      <MdLightMode
        className="w-8 h-8 text-white"
        role="button"
        title="Switch to Light"
        onClick={() => setTheme(ThemeMode.LIGHT)}
      />
    )
  } else {
    return (
      <MdDarkMode
        className="w-8 h-8 text-gray-900"
        role="button"
        title="Switch to Dark"
        onClick={() => setTheme(ThemeMode.DARK)}
      />
    )
  }
}
