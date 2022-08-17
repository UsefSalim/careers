/* eslint-disable no-undef */
import * as Home from 'components/Home';
import JobsHeader from 'components/Jobs/Header';
import { Layout } from 'components/Layout';
import { BASE_URL, DEPARTEMENTS__URL, JOBS__URL } from 'env';
import { useFormik } from 'formik';
import { useSwr } from 'hooks';
import { useState } from 'react';
import { getData } from 'services';
const Jobs = ({ data }) => {
  const { res: jobs } = useSwr(`${BASE_URL}/${JOBS__URL}`, 'jobs', data?.jobs);

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
  return (
    <Layout>
      <JobsHeader
        {...{
          jobs,
          handleChange,
          values,
          handleSubmit,
          setFieldValue,
        }}
      />
      <Home.Main {...{ jobs: filtredJob, pagination: 12 }}></Home.Main>
    </Layout>
  );
};

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

export default Jobs;
