interface Links {
  name: string,
  url: string
}

export interface HeaderProps {
  theme: string
  links: Links[]
  toggleTheme: () => void
  setSidebarOpen: (arg: boolean) => void
}
