// Create 
router.post('/', function(req, res) {
    MoodMap.create(req.body).then(function(moodmap) {
        res.send('/moodmap' + moodmap.id);
    });
});