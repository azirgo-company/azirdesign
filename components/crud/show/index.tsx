"use client"

import {
  useBack,
  useGo,
  useNavigation,
  useRefineContext,
  useResource,
  useRouterType,
  useToPath,
  useTranslate,
  useUserFriendlyName,
} from "@refinedev/core"
import { isValidElement } from "react"

import { ArrowLeft } from "lucide-react"
import { Breadcrumbs } from "../../breadcrumb"
import { EditButton } from "../../buttons/edit"
import { ListButton } from "../../buttons/list"
import {
  DeleteButtonProps,
  EditButtonProps,
  ListButtonProps,
  RefreshButtonProps,
} from "../../buttons/types"
import { PageHeader } from "../../page-header"
import { ReloadButton } from "../../reload-button"
import { Button } from "../../ui/button"
import { ShowProps } from "../types"

export const Show = (props: ShowProps) => {
  const {
    children,
    resource: resourceFromProps,
    recordItemId,
    canDelete,
    deleteButtonProps: deleteButtonPropsFromProps,
    canEdit,
    dataProviderName,
    isLoading,
    footerButtons: footerButtonsFromProps,
    footerButtonProps,
    headerButtons: headerButtonsFromProps,
    headerButtonProps,
    wrapperProps,
    contentProps,
    headerProps,
    goBack: goBackFromProps,
    breadcrumb: breadcrumbFromProps,
    title,
  } = props
  const translate = useTranslate()
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext()

  const routerType = useRouterType()
  const back = useBack()
  const go = useGo()
  const { goBack, list: legacyGoList } = useNavigation()
  const getUserFriendlyName = useUserFriendlyName()

  const {
    resource,
    action,
    id: idFromParams,
    identifier,
  } = useResource(resourceFromProps)

  const goListPath = useToPath({
    resource,
    action: "list",
  })

  const id = recordItemId ?? idFromParams

  const breadcrumb =
    typeof breadcrumbFromProps === "undefined"
      ? globalBreadcrumb
      : breadcrumbFromProps

  const hasList = resource?.list && !recordItemId
  const isDeleteButtonVisible =
    canDelete ??
    ((resource?.meta?.canDelete ?? resource?.canDelete) ||
      deleteButtonPropsFromProps)

  const isEditButtonVisible = canEdit ?? resource?.canEdit ?? !!resource?.edit

  const listButtonProps: ListButtonProps | undefined = hasList
    ? {
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
      }
    : undefined
  const editButtonProps: EditButtonProps | undefined = isEditButtonVisible
    ? {
        colorScheme: "brand",
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
        recordItemId: id,
      }
    : undefined
  const deleteButtonProps: DeleteButtonProps | undefined = isDeleteButtonVisible
    ? {
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
        recordItemId: id,
        onSuccess: () => {
          if (routerType === "legacy") {
            legacyGoList(resource?.route ?? resource?.name ?? "")
          } else {
            go({ to: goListPath })
          }
        },
        dataProviderName,
        ...deleteButtonPropsFromProps,
      }
    : undefined
  const refreshButtonProps: RefreshButtonProps = {
    ...(isLoading ? { disabled: true } : {}),
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id,
    dataProviderName,
  }

  const defaultHeaderButtons = (
    <>
      {listButtonProps && <ListButton {...listButtonProps} />}
      {isEditButtonVisible && (
        <EditButton colorScheme="brand" {...editButtonProps} />
      )}
      {/* {isDeleteButtonVisible && <DeleteButton {...deleteButtonProps} />} */}
      <ReloadButton />
    </>
  )

  const buttonBack =
    goBackFromProps === (false || null) ? null : (
      <Button
        aria-label="back"
        variant="ghost"
        size="sm"
        onClick={
          action !== "list" && typeof action !== "undefined"
            ? routerType === "legacy"
              ? goBack
              : back
            : undefined
        }
      >
        {typeof goBackFromProps !== "undefined" ? (
          goBackFromProps
        ) : (
          <ArrowLeft />
        )}
      </Button>
    )

  const headerButtons = headerButtonsFromProps
    ? typeof headerButtonsFromProps === "function"
      ? headerButtonsFromProps({
          defaultButtons: defaultHeaderButtons,
          deleteButtonProps,
          editButtonProps,
          listButtonProps,
          refreshButtonProps,
        })
      : headerButtonsFromProps
    : defaultHeaderButtons

  const footerButtons = footerButtonsFromProps
    ? typeof footerButtonsFromProps === "function"
      ? footerButtonsFromProps({ defaultButtons: null })
      : footerButtonsFromProps
    : null

  const renderTitle = () => {
    if (title === false) return null

    if (title) {
      if (typeof title === "string" || typeof title === "number") {
        return <h3 className="text-2xl leading-tight font-bold">{title}</h3>
      }

      return title
    }

    return (
      <h3 className="text-2xl leading-tight font-bold">
        {translate(
          `${identifier}.titles.show`,
          `Show ${getUserFriendlyName(
            resource?.meta?.label ??
              resource?.options?.label ??
              resource?.label ??
              identifier,
            "singular"
          )}`
        )}
      </h3>
    )
  }

  return (
    <PageHeader
      title={renderTitle()}
      isBack
      breadcrumb={
        isValidElement(breadcrumb) ? <>{breadcrumb}</> : <Breadcrumbs />
      }
      reloadId={id}
      reloadInvalidates={["detail"]}
      extra={headerButtons}
    >
      {children}
    </PageHeader>
  )
}
