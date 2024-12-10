import styled, { css } from 'styled-components';

/**
 * 该文件只维护项目整体布局样式，不能随便修改本文件内容，以免页面布局错乱
 * App整体结构：
 * app (container)
 *   |-header
 *   |   |--header-head (logo)
 *   |   |--header-body (menu)
 *   |   |--header-foot (userinfo)
 *   |-main
 *   |   |--aside
 *   |   |    |---aside-head (aside menu title)
 *   |   |    |---aside-body (aside menu)
 *   |   |    |---aside-foot (aside toggle)
 *   |   |--content
 *   |   |    |---content-head (breadcrumb)
 *   |   |    |---content-body (route [section])
 *   |   |    |---content-foot (copyright)
 *   |-footer
 *   |   |--copyright
 *
 * App模块结构
 *
 * Section结构：
 * section (container)
 *   |-head (breadcrumb)
 *   |-main (table、form)
 *   |   |--aside (setting)
 *   |   |--content (table、form)
 *   |-foot (operate)
 *
 * App搜索表单
 *
 */

export const AutoCss = css`
  position: relative;
  margin: 0 auto;
`;

export const ContainerCss = css`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  ${AutoCss};
  min-height: 0;
  &.is-horizontal {
    flex-direction: row;
  }
`;

export const HeaderCss = css`
  display: flex;
  flex-direction: row;
  ${AutoCss};
  width: 100%;
`;

export const MainCss = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${AutoCss};
  width: 100%;

  &.is-horizontal {
    flex-direction: row;
  }
`;

export const FooterCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${AutoCss};
  width: 100%;
`;

export const SiderCss = css`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 200px;
  overflow: hidden;
  /* box-shadow: inset -1px 0 1px rgba(0, 0, 0, 0.06); */
`;

export const ContentCss = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

export const ContentHeadCss = css`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const ContentFootCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBodyCss = css`
  display: flex;
  flex: auto;
  flex-direction: column;
  /* flex-basis: 0; */
  position: relative;
  width: 100%;
`;

export const ContainerLayout = styled.section`
  ${ContainerCss};
  margin: 10px 16px;
  border-radius: 4px;
`;

export const HeaderLayout = styled.div`
  ${HeaderCss};
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: inset 0 -1px 1px #f0f0f0;
`;

export const MainLayout = styled.div`
  ${MainCss};
`;

export const FooterLayout = styled.div`
  ${FooterCss};
`;

export const SiderLayout = styled.div`
  ${SiderCss};
`;

export const ContentLayout = styled.div`
  ${ContentCss};
`;

export const ContentHeadLayout = styled.div`
  ${ContentHeadCss};
`;

export const ContentBodyLayout = styled.div`
  ${ContentBodyCss};
`;

export const ContentFootLayout = styled.div`
  ${ContentFootCss};
`;
