import React from 'react';

function ReportPage(props: any) {
    const { resIntro, resOverview, marketBenefits, marketChallenges, productFit, valueMisalignment, marketingMethods, failureSection, finalSection } = props;

  return (
    <div style={{marginLeft: '10%', marginRight: '10%', overflow: 'auto',whiteSpace: 'pre-wrap' }}>
      <h1>Report</h1>
      {resIntro}
      <h2>Overview: </h2>{resOverview}
      <h2>Market Benefits </h2>{marketBenefits}
      <h2>Marketing challenges </h2>{marketChallenges}
      <h2>Product Fit </h2> {productFit}
      <h2>Value misalignment </h2> {valueMisalignment}
      <h2>Marketing methods </h2> {marketingMethods}
      <h2>Failure Section </h2> {failureSection}
      <h2>Final Section </h2> {finalSection}
    </div>
  );
};

export default ReportPage;
