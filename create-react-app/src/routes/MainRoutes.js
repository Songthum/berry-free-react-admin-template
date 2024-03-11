import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const ListNameStudentS1Page = Loadable(lazy(() => import('views/dashboard/Default/CSB/ListNameStudentS1')));
const ListNameStudentS2Page = Loadable(lazy(() => import('views/dashboard/Default/CSB/ListNameStudentS2')));
const ListOfDocPage = Loadable(lazy(() => import('views/dashboard/Default/CSB/ListOfDoc')));
const RemainingStudentsNamePage = Loadable(lazy(() => import('views/dashboard/Default/CSB/RemainingStudentsName')));
const ManageExamSPPage = Loadable(lazy(() => import('views/dashboard/Default/CSB/ManageExamSP')));
const ManageExamRoomPage = Loadable(lazy(() => import('views/dashboard/Default/CSB/ManageExamRoom')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
//ยูเพิ่ม
const InputScoreCSB02Page = Loadable(lazy(() => import('views/utilities/InputScoreCSB02')));
const InputScoreCSB03Page = Loadable(lazy(() => import('views/utilities/InputScoreCSB03')));
const ChairmanScoreCSB02Page = Loadable(lazy(() => import('views/utilities/ChairmanScoreCSB02')));
const ChairmanScoreCSB03Page = Loadable(lazy(() => import('views/utilities/ChairmanScoreCSB03')));
const DepartmentHeadScoreCSB02Page = Loadable(lazy(() => import('views/utilities/DepartmentHeadScoreCSB02')));
const DepartmentHeadScoreCSB03Page = Loadable(lazy(() => import('views/utilities/DepartmentHeadScoreCSB03')));
const RequestAdvisorPage = Loadable(lazy(() => import('views/utilities/RequestAdvisor')));
const EvaluateProjectPage = Loadable(lazy(() => import('views/utilities/EvaluateProject')));
const AppTestPage = Loadable(lazy(() => import('views/utilities/test')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const UploadLinkTranscriptPage = Loadable(lazy(() => import('views/sample-page/UploadLinkTranscript')));
const UploadLinkTranscript2Page = Loadable(lazy(() => import('views/sample-page/UploadLinkTranscript2')));
const CSB01Page = Loadable(lazy(() => import('views/sample-page/CSB01')));
const CSB02Page = Loadable(lazy(() => import('views/sample-page/CSB02')));
const CSB03Page = Loadable(lazy(() => import('views/sample-page/CSB03')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: '/sample-page/UploadLinkTranscript',
      element: <UploadLinkTranscriptPage />
    },
    {
      path: '/sample-page/CSB01',
      element: <CSB01Page />
    },
    {
      path: '/sample-page/CSB02',
      element: <CSB02Page />
    },
    {
      path: '/sample-page/UploadLinkTranscript2',
      element: <UploadLinkTranscript2Page />
    },
    {
      path: '/sample-page/CSB03',
      element: <CSB03Page />
    },
    {
      path: '/utilities/InputScoreCSB02',
      element: <InputScoreCSB02Page />
    },
    {
      path: '/utilities/InputScoreCSB03',
      element: <InputScoreCSB03Page />
    },
    {
      path: '/utilities/ChairmanScoreCSB02',
      element: <ChairmanScoreCSB02Page />
    },
    {
      path: '/utilities/ChairmanScoreCSB03',
      element: <ChairmanScoreCSB03Page />
    },
    {
      path: '/utilities/DepartmentHeadScoreCSB02',
      element: <DepartmentHeadScoreCSB02Page />
    },
    {
      path: '/utilities/DepartmentHeadScoreCSB03',
      element: <DepartmentHeadScoreCSB03Page />
    },
    {
      path: '/utilities/RequestAdvisor',
      element: <RequestAdvisorPage />
    },
    {
      path: '/utilities/EvaluateProject',
      element: <EvaluateProjectPage />
    },
    {
      path: '/utilities/AppTest',
      element: <AppTestPage />
    },
    {
      path: '/dashboard/CSB/ListNameStudentS1',
      element: <ListNameStudentS1Page />
    },
    {
      path: '/dashboard/CSB/ListNameStudentS2',
      element: <ListNameStudentS2Page />
    },
    {
      path: '/dashboard/CSB/ListOfDoc',
      element: <ListOfDocPage />
    },
    {
      path: '/dashboard/CSB/RemainingStudentsName',
      element: <RemainingStudentsNamePage />
    },
    {
      path: '/dashboard/CSB/ManageExamSP',
      element: <ManageExamSPPage />
    },
    {
      path: '/dashboard/CSB/ManageExamRoom',
      element: <ManageExamRoomPage />
    },
  ]
};

export default MainRoutes;
