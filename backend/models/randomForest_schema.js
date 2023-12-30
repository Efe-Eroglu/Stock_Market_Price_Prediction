const mongoose = require ("mongoose");

const randomf_schema = mongoose.Schema(
    {
        hisseId:{type:String, required:false},
        hisseAd:{type:String, required:false},
        n_estimator:{type:[String], required:false},
        max_depth:{type:[String], required:false},
        min_samples_leaf:{type:[String], required:false},
        dogruluk_degeri:{type:[String], required:false}
    },
    {
        timestamps:true
    }
);

const RadnomForest_Schema = mongoose.model("Random Forest",randomf_schema);

module.exports = RadnomForest_Schema;



