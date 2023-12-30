const mongoose = require ("mongoose");

const decisionTree_schema = mongoose.Schema(
    {
        hisseId:{type:String, required:false},
        hisseAd:{type:String, required:false},
        max_depth:{type:[String], required:false},
        min_samples_leaf:{type:[String], required:false},
        min_samples_split:{type:[String], required:false},
        dogruluk_degeri:{type:[String], required:false}
    },
    {
        timestamps:true
    }
);

const decisionTree = mongoose.model("Decision_Tree",decisionTree_schema);

module.exports = decisionTree;



