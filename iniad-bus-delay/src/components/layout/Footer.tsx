import { IconBell, IconHome, IconSearch, IconSettings } from '@tabler/icons-react'

export const Footer = () => (
  <footer className="sticky bottom-0 border-background-100 border-t bg-background/16 backdrop-blur-md">
    <div className="mx-auto flex max-w-max-content items-center justify-around gap-12 px-8 pt-4 pb-8">
      {[IconHome, IconSearch, IconBell, IconSettings].map((Icon) => (
        <button
          key={Icon.displayName}
          type="button"
          className="flex grow cursor-pointer items-center justify-center rounded-lg p-2 transition-colors hover:bg-background-100"
        >
          <Icon />
        </button>
      ))}
    </div>
  </footer>
)
