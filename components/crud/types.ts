import {
  RefineCrudCreateProps,
  RefineCrudEditProps,
  RefineCrudListProps,
  RefineCrudShowProps,
} from "@refinedev/ui-types"
import { PageHeaderProps } from "../layout/header/types"
import {
  CreateButtonProps,
  DeleteButtonProps,
  EditButtonProps,
  ListButtonProps,
  RefreshButtonProps,
} from "../buttons/types"

export type CreateProps = RefineCrudCreateProps<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  PageHeaderProps
> &
  Partial<{
    extra: React.ReactNode
  }>

export type EditProps = RefineCrudEditProps<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> &
  Partial<{
    extra: React.ReactNode
    headerButtons: (props: {
      defaultButtons: React.ReactNode
      listButtonProps: ListButtonProps | undefined
      refreshButtonProps: RefreshButtonProps | undefined
    }) => React.ReactNode
  }>

export type ListProps = Omit<
  RefineCrudListProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PageHeaderProps,
    CreateButtonProps
  >,
  "createButtonProps" | "headerButtons"
> &
  Partial<{
    createButtonProps: CreateButtonProps
    extra: React.ReactNode
    className: string
    headerButtons: (props: {
      defaultButtons: React.ReactNode
      createButtonProps: CreateButtonProps | undefined
    }) => React.ReactNode
  }>

export type ShowProps = RefineCrudShowProps<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  PageHeaderProps
> &
  Partial<{
    extra: React.ReactNode
    headerButtons: (props: {
      defaultButtons: React.ReactNode
      deleteButtonProps: DeleteButtonProps | undefined
      editButtonProps: EditButtonProps | undefined
      listButtonProps: ListButtonProps | undefined
      refreshButtonProps: RefreshButtonProps | undefined
    }) => React.ReactNode
  }>
