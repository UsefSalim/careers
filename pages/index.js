/* eslint-disable no-undef */
import * as Home from 'components/Home';
import { Layout } from 'components/Layout';
import { BASE_URL, DEPARTEMENTS__URL, JOBS__URL } from 'env';
import { useFormik } from 'formik';
import { useSwr } from 'hooks';
import { useState } from 'react';
import { getData } from 'services';

export default function HomePage({ data }) {
  const { res: jobs } = useSwr(`${BASE_URL}/${JOBS__URL}`, 'jobs', data?.jobs);
  const { res: departments } = useSwr(
    `${BASE_URL}/${DEPARTEMENTS__URL}`,
    'departments',
    data?.departments
  );
  const [filtredJob, setFiltredJob] = useState(jobs);
  const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
    enableReinitialize: true,
    initialValues: { job: '', departements: [] },
    onSubmit: (values) => {
      setFiltredJob(
        jobs?.filter((job) => {
          if (values.job === '' && values?.departements?.length === 0) {
            return true;
          } else if (values.job !== '' && values?.departements?.length === 0) {
            if (
              job?.jobName?.toLowerCase().includes(values?.job?.toLowerCase())
            ) {
              return true;
            }
          } else if (values.job === '' && values?.departements?.length > 0) {
            if (
              job?.contractType &&
              values?.departements.includes(job.contractType)
            ) {
              return true;
            } else if (
              !job?.contractType &&
              values?.departements.includes('undefined')
            ) {
              return true;
            }
          } else if (values.job !== '' && values?.departements?.length > 0) {
            if (
              job?.contractType &&
              values?.departements.includes(job.contractType) &&
              job?.jobName?.toLowerCase().includes(values?.job?.toLowerCase())
            ) {
              return true;
            } else if (
              !job?.contractType &&
              values?.departements.includes('undefined') &&
              job?.jobName?.toLowerCase().includes(values?.job?.toLowerCase())
            ) {
              return true;
            }
          }
        })
      );
    },
  });
  // console.log(filtredJob);
  return (
    <Layout>
      <Home.Header
        {...{
          jobs,
          handleChange,
          values,
          handleSubmit,
          setFieldValue,
        }}
      ></Home.Header>
      <Home.Main {...{ jobs: filtredJob }}></Home.Main>
    </Layout>
  );
}
// export async function getStaticPaths() {
//   const { data } = await AXIOS.get('/public/jobs');
//   console.log(data);
//   return {
//     paths: data?.jobs?.map((d) => {
//       return {
//         params: { id: d.id },
//       };
//     }),
//     fallback: 'blocking',
//   };
// }

export async function getStaticProps() {
  const [jobs, departments] = await Promise.all([
    getData(JOBS__URL, 'jobs'),
    getData(DEPARTEMENTS__URL, 'departments'),
  ]);

  return {
    props: {
      data: { jobs, departments },
    },
    revalidate: 3600,
  };
}
