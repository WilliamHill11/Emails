const getNumber = (str) => {
  return Number(str.replace(/[^0-9\.-]+/g, ''));
};

let state = {
  price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
  loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
  down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
  interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
  property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
  home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
  hoa: document.querySelectorAll('[name="hoa"]')[0].value,
};

let totalLoan,
  totalMonths,
  monthlyInterest,
  monthlyPrincipalInterest,
  monthlyPropertyTaxes,
  monthlyHomeInsurance,
  monthlyHOA,
  labels = ['Principal & Interest', 'Property Tax', 'Home Insurance', 'HOA'],
  backgroundColor = [
    'rgba(255,99,132,1)',
    'rgba(54,162,235,1)',
    'rgba(255,206,86,1)',
    'rgba(75,192,192,1)',
    'rgba(153,102,255,1)',
    'rgba(255,159,64,1)',
  ];

borderColor = [
  'rgba(255,99,132,1)',
  'rgba(54,162,235,1)',
  'rgba(255,206,86,1)',
  'rgba(75,192,192,1)',
  'rgba(153,102,255,1)',
  'rgba(255,159,64,1)',
];

document.addEventListener('DOMContentLoaded', function () {
  const labels = [
    'Principal & Interest',
    'Property Tax',
    'Home Insurance',
    'HOA',
  ];
  const data = [
    /* Your data values here */
  ];
  const backgroundColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
  ];
  const borderColor = backgroundColor;

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
