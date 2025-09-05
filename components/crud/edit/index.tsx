import {
  AutoSaveIndicator,
  useBack,
  useGo,
  useMutationMode,
  useNavigation,
  useRefineContext,
  useResource,
  useRouterType,
  useToPath,
  useTranslate,
  useUserFriendlyName,
} from "@refinedev/core"

import { FC, isValidElement } from "react"

import { Breadcrumbs } from "../../breadcrumb"
import { DeleteButton } from "../../buttons/delete"
import { EditProps } from "../types"
import { PageHeader } from "../../page-header"
import {
  ListButtonProps,
  RefreshButtonProps,
  DeleteButtonProps,
} from "../../buttons/types"
import { RefreshButton } from "../../buttons/refresh"
import { ListButton } from "../../buttons/list"
import { Skeleton } from "../../ui/skeleton"

export const EditPage = ({
  title,
  resource: resourceFromProps,
  mutationMode: mutationModeFromProps,
  recordItemId,
  deleteButtonProps: deleteButtonPropsFromProps,
  headerButtons: headerButtonsFromProps,
  dataProviderName,
  extra,
  breadcrumb: breadcrumbFromProps,
  canDelete = true,
  children,
  isLoading,
  autoSaveProps,
}: EditProps) => {
  const translate = useTranslate()
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext()
  const { mutationMode: mutationModeContext } = useMutationMode()
  const mutationMode = mutationModeFromProps ?? mutationModeContext

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

  const listButtonProps: ListButtonProps | undefined = hasList
    ? {
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
      }
    : undefined

  const refreshButtonProps: RefreshButtonProps | undefined = {
    ...(isLoading ? { disabled: true } : {}),
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id,
    dataProviderName,
  }

  const deleteButtonProps: DeleteButtonProps | undefined = isDeleteButtonVisible
    ? ({
        ...(isLoading ? { disabled: true } : {}),
        resource: routerType === "legacy" ? resource?.route : identifier,
        mutationMode,
        onSuccess: () => {
          if (routerType === "legacy") {
            legacyGoList(resource?.route ?? resource?.name ?? "")
          } else {
            go({ to: goListPath })
          }
        },
        recordItemId: id,
        dataProviderName,
        ...deleteButtonPropsFromProps,
      } as const)
    : undefined

  const defaultHeaderButtons = (
    <div className="flex flex-row items-center gap-2">
      {autoSaveProps && <AutoSaveIndicator {...autoSaveProps} />}
      {hasList && <ListButton {...listButtonProps} />}
      <RefreshButton {...refreshButtonProps} />
      <DeleteButton {...deleteButtonProps} />
    </div>
  )

  const headerButtons = headerButtonsFromProps
    ? typeof headerButtonsFromProps === "function"
      ? headerButtonsFromProps({
          defaultButtons: defaultHeaderButtons,
          listButtonProps,
          refreshButtonProps,
        })
      : headerButtonsFromProps
    : defaultHeaderButtons

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
    <>
      <PageHeader
        title={renderTitle()}
        isBack
        breadcrumb={isValidElement(breadcrumb) ? breadcrumb : <Breadcrumbs />}
        extra={
          extra ?? (
            <div className="inline-flex flex-row items-center gap-x-2">
              {headerButtons}
            </div>
          )
        }
      />
      <div className="pt-4">
        {isLoading && <Skeleton className="h-[80vh] w-full" />}
        {!isLoading && children}
      </div>
    </>
  )
}
