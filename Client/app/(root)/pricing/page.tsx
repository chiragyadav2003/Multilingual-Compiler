"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

type Frequency = {
  value: string;
  label: string;
  priceSuffix: string;
};

type Tier = {
  name: string;
  id: string;
  href: string;
  price: { monthly: string; annually: string };
  description: string;
  features: string[];
  mostPopular: boolean;
};

const frequencies: Frequency[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers: Tier[] = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: [
      '2 Login at a time',
      'Up to 10,000 compile Requests per day',
      'GPT - Support of 50 requests per day', 
      '48-hour support response time'
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '100 Login at a time',
      'Up to 1,00,000 requests per day',
      'GPT - support with no limits',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$48', annually: '$576' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited Users',
      'Unlimited requests',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'GPT - support with no limits',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);

  return (
    <div className="bg-gray-900 py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2> */}
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value as 'monthly' | 'annually']}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
