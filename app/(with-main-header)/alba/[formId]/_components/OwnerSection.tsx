'use client';

import Applications from '@/app/(with-main-header)/alba/[formId]/_components/Applications';
import OwnerActions from '@/app/(with-main-header)/alba/[formId]/_components/OwnerActions';
import { useUserStore } from '@/store/user';

type OwnerSectionProps = { formId: number };

const OwnerSection = ({ formId }: OwnerSectionProps) => {
  const isOwner = useUserStore((state) => state.isOwner);

  if (!isOwner) {
    return null;
  }

  return (
    <>
      <section className="relative mt-10 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-screen before:h-2 before:bg-line-100">
        <Applications formId={formId} />
      </section>
      <section className="py-4">
        <OwnerActions formId={formId} />
      </section>
    </>
  );
};

export default OwnerSection;
