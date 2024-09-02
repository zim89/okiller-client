import { TemplateCard } from './template-card'

export const TemplateList = () => {
  return (
    <ul>
      {Array.from({ length: 6 }).map((_, index) => (
        <li key={index}>
          <TemplateCard />
        </li>
      ))}
    </ul>
  )
}
