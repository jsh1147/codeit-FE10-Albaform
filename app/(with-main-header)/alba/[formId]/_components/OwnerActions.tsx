'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

type OwnerActionsProps = {
  formId: number;
};

const OwnerActions = ({ formId }: OwnerActionsProps) => {
  const { push } = useRouter();

  const handleOnEdit = () => {
    push(`/edit/${formId}`); //TODO url 확정시 수정
  };

  const handleOnDelete = () => {
    push(`/edit/${formId}`); //TODO url 확정시 수정
  };

  return (
    <div className="font-semibold text-lg lg:text-xl flex lg:flex-col gap-2.5 lg:gap-4">
      <Button
        content="수정하기"
        iconUrl="/icons/edit.svg"
        onClick={handleOnEdit}
        className="order-2 lg:order-1"
      />
      <button
        className="order-1 rounded-lg bg-line-200 w-3/12 lg:w-full h-[58px] lg:h-[72px] flex items-center justify-center gap-1"
        onClick={handleOnDelete}
      >
        <Image
          src="/icons/trash-can.svg"
          alt="삭제하기"
          width={24}
          height={24}
          className="lg:w-9 lg:h-9"
        />
        <span className="hidden text-gray-300 text-xl font-semibold lg:inline">
          삭제하기
        </span>
      </button>
    </div>
  );
};

export default OwnerActions;