const router = require('express').Router();
const { Enrollments } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newEnrollmentData = await Enrollments.findOrCreate({
          where: {
            user_id: req.session.user_id,
            study_group_id: req.body.study_group_id,
          }
          
        });
        // const enrollment = newEnrollmentData.get({ plain: true });
        res.status(200).json(newEnrollmentData);
    
      //   req.session.save(() => {
      //     req.session.loggedIn = true;
    
      //     res.status(200).json(newGroupData);
      //   });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }



});

router.post('/:id', async (req, res) => {
  try {
      // console.log(req.body);
      const newEnrollmentData = await Enrollments.findOrCreate({
        where: {
          user_id: req.params.id,
          study_group_id: req.body.study_group_id,
        }
        
      });
      // const enrollment = newEnrollmentData.get({ plain: true });
      res.status(200).json(newEnrollmentData);
  
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  
    //     res.status(200).json(newGroupData);
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }



});

module.exports = router; 