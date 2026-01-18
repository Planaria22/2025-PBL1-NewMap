import { useState } from 'react';
import { Box, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

type SlideImage = {
  id: string;
  src: string;
};

type PhotoShowProps = {
  images: SlideImage[];
};

const PhotoShow: React.FC<PhotoShowProps> = ({images}) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  if (maxSteps === 0) return null;

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };
  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Box sx={{maxWidth: 500, width: {xs: "90vw", sm: "50vw"}, flexGrow: 1, mx: 'auto'}}>
      <Box
      component="img"
      src={images[activeStep].src}
      alt={images[activeStep].id}
      sx={{
      width: '100%',
      height: 500,
      objectFit: 'cover',
      borderRadius: 2,
      mb: 2,
      }}/>
      <MobileStepper
      variant="progress"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{ background: 'transparent', justifyContent: 'center', '& .MuiMobileStepper-progress': {flexGrow: 1, mx: 2, height: 10, borderRadius: 5}}}
      nextButton={
        <Button size="small" sx={{ minWidth: 80, justifyContent: 'space-between' }} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          次へ<KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" sx={{ minWidth: 80, justifyContent: 'space-between' }} onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />戻る
        </Button>
      }/>
    </Box>
  );
};

export default PhotoShow;
