export const PageHeader = ({
  title,
  subTitle,
  isBack = false,
  extra,
  children,
}: any) => {
  return (
    <div>
      {isBack && <button>{"<-"}</button>}
      <h2>{title}</h2>
      {subTitle && <div>{subTitle}</div>}
      {extra}
      {children}
    </div>
  )
}
