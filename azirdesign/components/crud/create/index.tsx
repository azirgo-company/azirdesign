import React, { ReactNode, isValidElement } from 'react'
import { useRefineContext, useResource, useTranslate, useUserFriendlyName } from '@refinedev/core'

import { Breadcrumbs } from '../../breadcrumb'
import { CreateProps } from '../types'
import { ListButton } from '../../buttons/list'
import { PageHeader } from '../../page-header'

export const CreatePage = ({
  title,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  extra,
  children,
}: CreateProps): ReturnType<React.FC<CreateProps>> => {
  const translate = useTranslate()
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext()

  const getUserFriendlyName = useUserFriendlyName()

  const { resource, identifier } = useResource(resourceFromProps)

  const breadcrumb =
    typeof breadcrumbFromProps === 'undefined' ? globalBreadcrumb : breadcrumbFromProps

  const renderTitle = () => {
    if (title === false) return null

    if (title) {
      if (typeof title === 'string' || typeof title === 'number') {
        return <h3>{title}</h3>
      }
      return title
    }
    return (
      <h3>
        {translate(
          `${identifier}.titles.create`,
          `Create ${getUserFriendlyName(
            resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
            'singular',
          )}`,
        )}
      </h3>
    )
  }

  return (
    <>
      <PageHeader
        title={renderTitle()}
        isBack
        breadcrumb={isValidElement(breadcrumb) ? breadcrumb : <Breadcrumbs />}
        extra={
          extra ?? (
            <>
              <ListButton resource={resourceFromProps} />
            </>
          )
        }
      />
      <div className="!mt-0 pt-4">{children}</div>
    </>
  )
}

CreatePage.displayName = 'CreatePage'
