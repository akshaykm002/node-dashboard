const Insight = require('../models/Insights.js');

const getInsights = async (req, res) => {
    try {
        console.log('Received query parameters:', req.query);

        const {
            end_year,
            topic,
            sector,
            region,
            pestle,
            source,
            swot,
            country,
            city
        } = req.query;

        // Dynamic filters object
        let filters = {};

        // Add filters dynamically
        if (end_year && end_year !== '') filters.end_year = end_year; 
        if (topic && topic !== '') filters.topic = { $regex: topic, $options: "i" };
        if (sector && sector !== '') filters.sector = { $regex: sector, $options: "i" };
        if (region && region !== '') filters.region = { $regex: region, $options: "i" };
        if (pestle && pestle !== '') filters.pestle = { $regex: pestle, $options: "i" };
        if (source && source !== '') filters.source = { $regex: source, $options: "i" };
        if (swot && swot !== '') filters.swot = { $regex: swot, $options: "i" };
        if (country && country !== '') filters.country = { $regex: country, $options: "i" };
        if (city && city !== '') filters.city = { $regex: city, $options: "i" };

        console.log("Filters object:", filters);

        const insights = await Insight.find(filters);
        // console.log("Database results:", insights);

        if (insights.length === 0) {
            return res.status(404).json({ message: 'No insights found with the given filters' });
        }

        res.status(200).json(insights);
    } catch (error) {
        console.error("Error in getInsights:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const addInsights = async (req, res) => {
    try {
        const data = req.body;
        await Insight.insertMany(data);
        res.status(201).json({ message: 'Data imported successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error importing data', error: error.message });
    }
};

module.exports = { getInsights, addInsights };
