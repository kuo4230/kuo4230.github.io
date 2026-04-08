export interface Project {
  type: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  tags: string[];
  link: string;
  ariaLabel: string;
}

export const projects: Project[] = [
  {
    type: "Computer Vision · Animal Behaviour · Research",
    title: "Video Annotation & Auto-Annotation for Animal Behaviour Studies",
    description:
      "Built an end-to-end Python pipeline for AgriGates to automate calf behaviour monitoring from video footage, replacing manual observation at scale. The system detects individual calves, tracks their movements using BotSort, and classifies behaviour (standing vs. lying) using a custom-trained ResNet-18 classifier. The final state classification model achieved >90% accuracy and F1 score in testing.",
    tags: ["Python", "PyTorch", "YOLOv8", "ResNet-18", "BoT-SORT"],
    link: "https://lnkd.in/gMRVEPkD",
    ariaLabel: "View Animal Behaviour Studies project",
  },
  {
    type: "Machine Learning · Healthcare · Classification",
    title: "Predicting Diabetes in Pima Indian Women Using Logistic Regression",
    descriptionHtml:
      'Built a logistic regression classifier with hyperparameter optimization to predict diabetes onset from clinical features including glucose levels, BMI, and pregnancies. The model achieved 75% accuracy on the test set, outperforming the baseline by ~8%. Glucose was the strongest predictor, followed by BMI and pregnancies. Analysis highlighted the clinical importance of reducing false negatives to avoid delayed diagnoses. View the full report <a href="https://ubc-mds.github.io/diabetes_predictor_py/reports/diabetes_analysis.html" target="_blank" rel="noopener noreferrer" style="color:var(--accent);">here</a>.',
    description: "",
    tags: ["Python", "scikit-learn", "pandas", "numpy", "Altair", "Matplotlib", "Quarto", "pytest"],
    link: "https://github.com/UBC-MDS/diabetes_predictor_py",
    ariaLabel: "View Diabetes Predictor project on GitHub",
  },
  {
    type: "Open Source · Software Engineering · Data Structures",
    title: "datastructpy: A Python Package",
    description:
      "Co-developed and shipped an open-source Python library providing clean, practical implementations of essential data structures, including Binary Search Trees, designed for interview prep, coding challenges, and education. Taken from concept to a fully published PyPI package in under a month, with automated testing, comprehensive documentation, and a robust CI/CD pipeline.",
    tags: ["Python", "Poetry", "pytest", "PyPI", "Tox", "GitHub Actions", "Codecov", "Sphinx"],
    link: "https://github.com/UBC-MDS/datastructpy",
    ariaLabel: "View datastructpy project on GitHub",
  },
  {
    type: "Mental Health · Topic Mining · NLP · Research · Unsupervised ML",
    title: "Mental Health App Review Topic Mining",
    description:
      "Explored NLP and unsupervised machine learning to automate analysis of mental health app user reviews at scale. Scraped 63,474 reviews across 157 apps from the Google Play Store, then applied TF-IDF vectorization and k-means clustering to surface high-level topics from user opinions. Compared ten models with varying pre-processing rules; the best model identified 6 distinct topics from all reviews, 6 from negative reviews, and 9 from positive reviews. Results suggest the approach is a promising complement to traditional qualitative analysis for rapid, large-scale review mining.",
    tags: ["Python", "NLP", "scikit-learn", "TF-IDF", "K-Means Clustering", "Text Mining", "Web Scraping", "Unsupervised ML"],
    link: "https://github.com/kuo4230/HI_Dissertation",
    ariaLabel: "View Mental Health Topic Mining project on GitHub",
  },
  {
    type: "Data Visualisation · Dashboard · Interactive",
    title: "World Happiness Dashboard",
    description:
      "Co-authored an interactive dashboard visualising the World Happiness Dataset (2020\u20132024), helping users explore economic and political factors that influence happiness across countries and continents. Users can filter by GDP, perception of corruption, and other criteria to compare nations, with a practical focus on identifying potential immigration destinations based on personal priorities.",
    tags: ["Python", "Dash", "Altair", "pandas", "GeoPandas", "scikit-learn", "Matplotlib", "Render"],
    link: "https://github.com/UBC-MDS/DSCI-532_2025_11_world_happiness",
    ariaLabel: "View World Happiness Dashboard on GitHub",
  },
];
