import FaqSection, { type FaqSectionData } from '@/components/marketing/ui/habit-faq-scroller';

const faqData: FaqSectionData = {
  mainTitle: 'Frequently Asked Questions',
  mainSubtitle: 'Before you ask, the things owners usually want to know first.',
  rows: [
    {
      id: 'row1',
      speed: '50s',
      direction: 'left',
      faqItems: [
        {
          id: 'q1',
          question: 'What does the diagnostic cost, and what do I get?',
          answer:
            "It's a fixed fee for two weeks, ending in a written report that says what's actually broken and what we would do about it. No slide deck sales pitch.",
        },
        {
          id: 'q2',
          question: "What if the answer is that I don't need you?",
          answer:
            "Then that's the answer. If the fix is a process change or a tool you already own, we tell you and stop there. We don't invent a build just to bill for one.",
        },
      ],
    },
    {
      id: 'row2',
      speed: '60s',
      direction: 'right',
      faqItems: [
        {
          id: 'q3',
          question: 'Who owns the code and the data?',
          answer:
            'You do, always. Every line of code and every record in the system belongs to you from day one, with no vendor lock in and no license fees to keep it running.',
        },
        {
          id: 'q4',
          question: 'What does staying on to run it mean, and can we exit?',
          answer:
            'If what you need is a running system, we stay on to operate and maintain it instead of handing you a codebase and disappearing. You can bring it in house or end the engagement whenever it suits you.',
        },
      ],
    },
  ],
};

export function FAQ() {
  return (
    <section id="faq" className="bg-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <FaqSection data={faqData} />
    </section>
  );
}
