

/**
 *
 * @export
 * @interface DeadOrAliveStatistics
 */
export interface DeadOrAliveStatistics {
    /**
     *
     * @type {number}
     * @memberof DeadOrAliveStatistics
     */
    deadOrAlive?: any | null;
    /**
     *
     * @type {number}
     * @memberof DeadOrAliveStatistics
     */
    amount?: any;
}

/**
 *
 * @export
 * @interface GenderStatistics
 */
export interface GenderStatistics {
    /**
     *
     * @type {number}
     * @memberof GenderStatistics
     */
    gender?: any | null;
    /**
     *
     * @type {number}
     * @memberof GenderStatistics
     */
    amount?: any;
}

/**
 *
 * @export
 * @interface YearsOfSoldPictures
 */
export interface YearsOfSoldPictures {
    /**
     *
     * @type {number}
     * @memberof YearsOfSoldPictures
     */
    year?: any | null;
    /**
     *
     * @type {number}
     * @memberof YearsOfSoldPictures
     */
    amountPictures?: any;
}

/**
 *
 * @export
 * @interface NationalityStatistics
 */
export interface NationalityStatistics {
    /**
     *
     * @type {string}
     * @memberof NationalityStatistics
     */
    nationality?: any | null;
    /**
     *
     * @type {number}
     * @memberof NationalityStatistics
     */
    amount?: any;
}

/**
 *
 * @export
 * @interface TechniqueStatistics
 */
export interface TechniqueStatistics {
    /**
     *
     * @type {string}
     * @memberof TechniqueStatistics
     */
    name?: any | null;
    /**
     *
     * @type {number}
     * @memberof TechniqueStatistics
     */
    amount?: any;
}

/**
 *
 * @export
 * @interface CityStatistics
 */
export interface CityStatistics {
    /**
     *
     * @type {string}
     * @memberof CityStatistics
     */
    name?: any | null;
    /**
     *
     * @type {number}
     * @memberof CityStatistics
     */
    amount?: any;
}

export interface ArtsModel {
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    id?: any;
    /**
     *
     * @type {Date}
     * @memberof Arts
     */
    saleDate?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    price?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    author?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    art1?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    owner?: any | null;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    sign?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    technique?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    material?: any | null;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    nazi?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    framed?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    size?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    squareM?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    currency?: any | null;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    estimateFrom?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    estimateTo?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    exhibitedNum?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    provenanceNum?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    literatureNum?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    cataloguingLength?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    time?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    city?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    description?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    triedUrl?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    image?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    dateOfBirth?: any | null;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    dateOfDeath?: any | null;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    century?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    nationality?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    sex?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    style?: any | null;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    repeatSale?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    feature1?: any | null;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    feature2?: any | null;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    numberOfDay?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    dayOfWeek?: any | null;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    month?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    year?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    dealTimeUtc?: any | null;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    normalizedPrice?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    hasFollowers?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    hasAfter?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    mannerOf?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    circleOf?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    isUntitled?: any;
    /**
     *
     * @type {boolean}
     * @memberof Arts
     */
    isNumbered?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    normalizedEstimatefrom?: any;
    /**
     *
     * @type {number}
     * @memberof Arts
     */
    normalizedEstimateto?: any;
    /**
     *
     * @type {string}
     * @memberof Arts
     */
    auction?: any | null;
}