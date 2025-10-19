import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CustomButton from '@/components/Button';
import './accordion.scss';
import EditableContent from '../editableContent/EditableContent';

// 🔧 Styled Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: '1px solid #f0f0f0',
  },
  '&::before': {
    display: 'none',
  },
}));

// 🔧 Styled AccordionSummary with component override
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    component="div" // ✅ Override default <h3> wrapper from MUI
    expandIcon={
      props['data-expanded'] ? (
        <RemoveIcon sx={{ fontSize: '1.1rem' }} />
      ) : (
        <AddIcon sx={{ fontSize: '1.1rem' }} />
      )
    }
  />
))(({ theme }) => ({
  backgroundColor: '#fff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 10, 2, 4),
  borderBottom: 'none',
}));

// 🔧 Main Component
export default function CustomizedAccordions({ modules = [] }) {

  const theme = useTheme();

  const [expandedSet, setExpandedSet] = React.useState(new Set());

  React.useEffect(() => {
    const allIds = modules.flatMap((module) => module.ques.map((q) => q.id));
    setExpandedSet(new Set(allIds));
  }, [modules]);


  const handleToggle = (id) => (event, isExpanded) => {
    setExpandedSet((prev) => {
      const newSet = new Set(prev);
      if (isExpanded) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const allQuestionIds = modules.flatMap((module) => module.ques.map((q) => q.id));
  const allOpen = expandedSet.size === allQuestionIds.length;

  const toggleAll = () => {
    setExpandedSet(allOpen ? new Set() : new Set(allQuestionIds));
  };

  const convertToId = (name) => name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Box className="accordion-container">
      <CustomButton variant="bounded" color="primary" size="small" sx={{
          display: 'flex',
          marginLeft: 'auto',
          marginBottom: '10px',
        }} onClick={toggleAll}>
          {allOpen ? 'Collapse All' : 'Expand All'}
        </CustomButton>

      {modules.map((module) => (
        <div key={module.id} className="module-section" style={{ marginBottom: '2rem' }} id={convertToId(module.name)}>
          <Typography component="h2" variant="body2" gutterBottom sx={{ color: alpha(theme.palette.white.contrastText, 0.7) }}>
            {module.name}: {module.desc}
          </Typography>

          {module.ques.length > 0 &&
            module.ques.map(({ id, title, content }) => (
              <Accordion key={id} expanded={expandedSet.has(id)} onChange={handleToggle(id)}>
                <AccordionSummary
                  aria-controls={`${id}-content`}
                  id={`${id}-header`}
                  data-expanded={expandedSet.has(id)}
                >
                  {/* ✅ Accordion heading as <h3> */}
                  <Typography component="h3" variant="body1">
                    {title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: { xs: "0px 0px 20px 20px", md: "0px 0px 24px 36px" }  }}>
                  <EditableContent initialContent={content} />
                </AccordionDetails>
              </Accordion>
            ))}
        </div>
      ))}
    </Box>
  );
}

CustomizedAccordions.defaultProps = {
  modules: [],
};

CustomizedAccordions.propTypes = {
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string,
      ques: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};
