
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// package com.google.zxing.oned;

import BarcodeFormat from '../../../core/BarcodeFormat';
import MultiFormatReader from '../../../core/MultiFormatReader';
import AbstractBlackBoxSpec from '../common/AbstractBlackBox';

/**
 * @author Sean Owen
 */
class Code128BlackBox1Spec extends AbstractBlackBoxSpec {
    public constructor() {
        super('src/test/resources/blackbox/code128-1', new MultiFormatReader(), BarcodeFormat.CODE_128);
        this.addTest(6, 6, 0.0);
        this.addTest(6, 6, 180.0);
    }
}

describe('Code128BlackBox.1', () => {
    it('testBlackBox', async () => {
        const test = new Code128BlackBox1Spec();
        await test.testBlackBox();
    });
});
