import {
  useRefineContext,
  useResource,
  useRouterType,
  useTranslate,
  useUserFriendlyName,
} from '@refinedev/core'

import { Breadcrumbs } from '@/src/azirdesign/components/breadcrumb'
import { CreateButton } from '@/src/azirdesign/components/buttons/create'
import { CreateButtonProps } from '@/src/azirdesign/components/buttons/types'
import { ListProps } from '@/src/azirdesign/components/crud/types'
import { PageHeader } from '@/src/azirdesign/components/page-header'
import { isValidElement } from 'react'

export const List = ({
  canCreate,
  title,
  children,
  createButtonProps: createButtonPropsFromProps,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  headerButtonProps,
  headerButtons: headerButtonsFromProps,
  extra,
}: ListProps) => {
  const translate = useTranslate()
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext()
  const routerType = useRouterType()
  const getUserFriendlyName = useUserFriendlyName()

  const { resource, identifier } = useResource(resourceFromProps)

  const isCreateButtonVisible =
    canCreate ?? ((resource?.canCreate ?? !!resource?.create) || createButtonPropsFromProps)

  const breadcrumb =
    typeof breadcrumbFromProps === 'undefined' ? globalBreadcrumb : breadcrumbFromProps

  const createButtonProps: CreateButtonProps | undefined = isCreateButtonVisible
    ? {
        resource: routerType === 'legacy' ? resource?.route : identifier,
        ...createButtonPropsFromProps,
      }
    : undefined

  const defaultExtra = isCreateButtonVisible ? <CreateButton {...createButtonProps} /> : null

  const headerButtons = headerButtonsFromProps
    ? typeof headerButtonsFromProps === 'function'
      ? headerButtonsFromProps({
          defaultButtons: defaultExtra,
          createButtonProps,
        })
      : headerButtonsFromProps
    : defaultExtra

  return (
    <div>
      <PageHeader
        title={
          title ??
          translate(
            `${identifier}.titles.list`,
            getUserFriendlyName(
              resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
              'plural',
            ),
          )
        }
        extra={<div className={headerButtonProps?.className}>{headerButtons}</div>}
        breadcrumb={isValidElement(breadcrumb) ? <>{breadcrumb}</> : <Breadcrumbs />}
      >
        {extra}
        <div>{children}</div>
      </PageHeader>
    </div>
  )
}
