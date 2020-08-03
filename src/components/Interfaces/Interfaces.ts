export interface TabInterface {
  id: string;
  title: string;
  content: string;
}

export interface Match {
  path: string;
  url: string;
  isExact: boolean;
  params: Params;
}

type Params = {
  tabsId: string;
};
