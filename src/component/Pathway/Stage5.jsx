import AIModel from '../../assets/AI_Model.svg'
import { useTranslation } from 'react-i18next'
const Stage5 = () => {
  const { t } = useTranslation()
  return (
    <div className="flex w-full  flex-col md:flex-row items-center justify-center py-8 px-10 md:px-8 lg:px-16 h-full ">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
          {t('PathWay.Stage5txt1')}
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
          {t('PathWay.Stage5txt2')}
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
          {t('PathWay.Stage5txt3')}
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#39DC8E]">
          {t('PathWay.Stage5txt4')}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={AIModel}
          alt="Ai-model"
          className="max-w-full max-h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Stage5;