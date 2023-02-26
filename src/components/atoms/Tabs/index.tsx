import {FC, forwardRef, ReactNode, useEffect, useState} from "react";
import {
  Tabs as ChakraUiTabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button, useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from "next/router";

type TabsProps = {
  data: {
    label: string
    component: ReactNode
    id: string
  }[],
  disabled?: boolean
}

const Tab = forwardRef<any, any>((props, ref) => {
  const activeTabTextColor = useColorModeValue("gray.700", "gray.300");
  const inactiveTabTextColor = useColorModeValue("gray.600", "gray.400");
  const activeTabBgColor = useColorModeValue("gray.200", "gray.700");
  const activeTabBorderColor = useColorModeValue("gray.200", "gray.600");
  const tabProps = useTab({ ...props, ref })
  const isSelected = tabProps['aria-selected']
  const isDisabled = tabProps['aria-disabled']
  const styles = useMultiStyleConfig('Tabs', tabProps)

  const borderRadius = isSelected ? '8px 8px 0 0' : undefined;
  const borderColor = isSelected ? activeTabBorderColor : undefined;
  const borderWidth = isSelected ? 1 : 0;
  const bg = isSelected ? activeTabBgColor : undefined;
  const color = isSelected ? activeTabTextColor : inactiveTabTextColor;

  return (
      <Button
          isDisabled={!!isDisabled}
          __css={styles.tab}
          _selected={{
            borderColor,
            borderWidth,
            borderRadius,
            transform: 'translateY(-1px)',
          }}
          {...tabProps}
          aria-controls={tabProps['aria-controls']}
          color={color}
          bg={bg}
          borderStyle={'solid'}
          borderColor={borderColor}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          >
        {tabProps.children}
      </Button>
  )
})

const Tabs: FC<TabsProps> = (props) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const type = router.query.type;
  Tab.displayName = 'Tab'

  useEffect(() => {
    if (type === 'identityNumber') {
      setTabIndex(0)
    } else if (type === 'names') {
      setTabIndex(1)
    } else if (type === 'processNumber') {
      setTabIndex(2)
    }
  }, [type, router.query]);

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }

  return (
      <ChakraUiTabs variant='unstyled' index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          {props.data.map((tab) => (
              <Tab isDisabled={props.disabled} key={tab.id}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels borderWidth={1}>
          {props.data.map((tab) => (
              <TabPanel minH="10rem" p={4} key={tab.id} alignItems="center" display="flex">
                {tab.component}
              </TabPanel>
          ))}
        </TabPanels>
      </ChakraUiTabs>
  )
}

export default Tabs