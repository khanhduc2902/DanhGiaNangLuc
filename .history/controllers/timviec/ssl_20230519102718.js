const functions = require('../../services/functions');
const New = require('../../models/Timviec365/Timviec/newTV365.model');
const SalaryLevel = require('../../models/Timviec365/Timviec/SalaryLevel');

// so sánh lương -----loading
exports.findSalary = async(req, res, next) => {
    try {
        const cityID = req.body.cityID;
        cốnle.log(cityID)
        const result = await New.aggregate([{
                $lookup: {
                    from: 'salarylevel',
                    localField: 'money',
                    foreignField: '_id',
                    as: 'salarylevel',
                },
            },
            {
                $unwind: '$salarylevel',
            },
            {
                $group: {
                    _id: {
                        money: '$money',
                        title: '$salarylevel.title',
                        _id: '$salarylevel._id',
                    },
                    cityID: { $first: '$cityID' },
                    title: { $first: '$salarylevel.title' },
                    _id: { $first: '$salarylevel._id' },
                    CountLevel: { $sum: 1 },
                },
            },
            {
                $lookup: {
                    from: 'SalaryLevel',
                    localField: '_id._id',
                    foreignField: '_id',
                    as: 'salarylevelInfo',
                },
            },
            {
                $unwind: '$salarylevelInfo',
            },
            {
                $project: {
                    _id: 0,
                    cityID: 1,
                    title: '$salarylevelInfo.title',
                    _id: 1,
                    CountLevel: 1,
                },
            },
            {
                $match: {
                    cityID: { $in: cityID },
                },
            },
        ]);
        console.log(result);


        return await functions.success(res, 'Thành công');
        // return await functions.setError(res, 'Không có dữ liệu', 404);
    } catch (err) {
        return functions.setError(res, err.message, );
    };
};