(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['plupload'], factory);
    } else if(typeof exports === 'object' && typeof module !== 'undefined') {
        var plupload;
        try {
            plupload = require('plupload');
        } catch (err) {
            plupload = root.plupload;
        }
        if (!plupload) throw new Error('plupload dependency not found');
        module.exports = factory(plupload);
    } else {
        if (!root.plupload) throw new Error('plupload dependency not found');
        factory(root.plupload);
    }
}(this, function(plupload) {

// French (fr)
    plupload.addI18n({
        "Stop Upload": "Arrêter l'envoi.",
        "Upload URL might be wrong or doesn't exist.": "L'URL d'envoi est soit erronée soit n'existe pas.",
        "tb": "To",
        "Size": "Taille",
        "Close": "Fermer",
        "Init error.": "Erreur d'initialisation.",
        "Add files to the upload queue and click the start button.": "Ajoutez des fichiers à la file d'attente de téléchargement et appuyez sur le bouton 'Démarrer l'envoi'",
        "Filename": "Nom du fichier",
        "Image format either wrong or not supported.": "Le format d'image est soit erroné soit pas géré.",
        "Status": "État",
        "HTTP Error.": "Erreur HTTP.",
        "Start Upload": "Démarrer l'envoi",
        "mb": "Mo",
        "kb": "Ko",
        "Duplicate file error.": "Erreur: Fichier déjà sélectionné.",
        "File size error.": "Erreur de taille de fichier.",
        "N/A": "Non applicable",
        "gb": "Go",
        "Error: Invalid file extension:": "Erreur: Extension de fichier non valide:",
        "Select files": "Sélectionnez les fichiers",
        "%s already present in the queue.": "%s déjà présent dans la file d'attente.",
        "File: %s": "Fichier: %s",
        "b": "o",
        "Uploaded %d/%d files": "%d fichiers sur %d ont été envoyés",
        "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Que %d fichier(s) peuvent être envoyé(s) à la fois. Les fichiers supplémentaires ont été ignorés.",
        "%d files queued": "%d fichiers en attente",
        "File: %s, size: %d, max file size: %d": "Fichier: %s, taille: %d, taille max. d'un fichier: %d",
        "Drag files here.": "Déposez les fichiers ici.",
        "Runtime ran out of available memory.": "Le traitement a manqué de mémoire disponible.",
        "File count error.": "Erreur: Nombre de fichiers.",
        "File extension error.": "Erreur d'extension de fichier",
        "Error: File too large:": "Erreur: Fichier trop volumineux:",
        "Add Files": "Ajouter des fichiers"
    });

}));