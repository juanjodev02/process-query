import {Box} from "@chakra-ui/react";
import Tabs from "@atoms/Tabs";
import {useIntl} from "react-intl";
import IdentityNumberSearch from "@organisms/IdentityNumberSearch";
import NameSearch from "@organisms/NameSearch";
import ProcessNumberSearch from "@organisms/ProcessNumberSearch";
import {FC} from "react";
import {ProcessQuerySearchBoxProps} from "@organisms/ProcessQuerySearchBox/types";

const ProcessQuerySearchBox: FC<ProcessQuerySearchBoxProps> = ({ onSearchSubmit, isLoading }) => {
  const intl = useIntl();

  return (
      <Box w='100%'>
        <Tabs data={[
          {
            component: <IdentityNumberSearch
                identityNumberPlaceholder={intl.formatMessage({id: 'page.home.processQuerySearchBox.identityNumber.placeholder'})}
                buttonLabel={intl.formatMessage({id: 'page.home.processQuerySearchBox.identityNumber.buttonLabel'})}
                identityNumberInvalidMessage={intl.formatMessage({id: 'page.home.processQuerySearchBox.identityNumber.invalidMessage'})}
                identityNumberRequiredMessage={intl.formatMessage({id: 'page.home.processQuerySearchBox.identityNumber.requiredMessage'})}
                onSubmit={(data) => onSearchSubmit('identityNumber', data)}
                isLoading={isLoading}
              />,
            label: intl.formatMessage({ id: "page.home.processQuerySearchBox.identityNumber.label" }),
          },
          {
            component: <NameSearch
              buttonLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.names.buttonLabel' })}
              fullNamePlaceholder={intl.formatMessage({ id: 'page.home.processQuerySearchBox.names.placeholder' })}
              fullNameRequiredMessage={intl.formatMessage({ id: 'page.home.processQuerySearchBox.names.requiredMessage' })}
              onSubmit={(data) => onSearchSubmit('names', data)}
              isLoading={isLoading}
            />,
            label: intl.formatMessage({ id: "page.home.processQuerySearchBox.names.label" })
          },
          {
            component: <ProcessNumberSearch
              buttonLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.buttonLabel' })}
              dependencyCodeLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.dependencyCodeLabel' })}
              dependencyCodePlaceholder={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.dependencyCodePlaceholder' })}
              dependencyCodeRequiredLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.dependencyCodeRequiredLabel' })}
              sequentialNumberLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.sequentialNumberLabel' })}
              sequentialNumberPlaceholder={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.sequentialNumberPlaceholder' })}
              sequentialNumberRequiredLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.sequentialNumberRequiredLabel' })}
              yearLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.yearLabel' })}
              yearPlaceholder={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.yearPlaceholder' })}
              yearRequiredLabel={intl.formatMessage({ id: 'page.home.processQuerySearchBox.processNumber.yearRequiredLabel' })}
              onSubmit={(data) => onSearchSubmit('processNumber', data)}
              isLoading={isLoading}
            />,
            label: intl.formatMessage({ id: "page.home.processQuerySearchBox.processNumber.label" })
          }
        ]}
        disabled={isLoading}
        />
      </Box>
  );
}

export default ProcessQuerySearchBox