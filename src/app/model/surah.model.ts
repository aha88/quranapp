
export interface Surah {
    place:   Place;
    type:    Type;
    count:   number;
    title:   string;
    titleAr: string;
    titleEn: string;
    index:   string;
    url:     string;
    pages:   string;
    juz:     Juz[];
}

 interface Juz {
    index: string;
    verse: Verse;
}

 interface Verse {
    start: string;
    end:   string;
}

 enum Place {
    Mecca = "Mecca",
    Medina = "Medina",
}

 enum Type {
    Madaniyah = "Madaniyah",
    Makkiyah = "Makkiyah",
}
