const mongoose = require ("mongoose");

const decisionTree_schema = mongoose.Schema(
    {
        hisseId:{type:String, required:false},
        hisseAd:{type:String, required:false},
        max_depth:{type:[Number], required:false},
        min_samples_leaf:{type:[Number], required:false},
        min_samples_split:{type:[Number], required:false},
        dogruluk:{type:[Number], required:false}
    },
    {
        timestamps:true
    }
);

const decisionTree = mongoose.model("Decision_Tree",decisionTree_schema);

module.exports = decisionTree;



