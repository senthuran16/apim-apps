/*
* Copyright (c) 2023, WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
* 
* WSO2 LLC. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
* 
* http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { FormattedMessage } from 'react-intl';
import type { PolicySpec } from './Types';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
}));

interface PolicyViewFormSharedProps {
    policySpec: PolicySpec;
    onDone: () => void;
    getPolicyAttributes: () => any;
    PolicyAttributes: any;
    GeneralDetails: any;
    SourceDetails: any;
}

const PolicyViewFormShared: FC<PolicyViewFormSharedProps> = ({ 
    policySpec, 
    onDone,
    getPolicyAttributes,
    PolicyAttributes,
    GeneralDetails,
    SourceDetails
}) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.root}>
            {/* General details of policy */}
            <GeneralDetails
                displayName={policySpec.displayName}
                version={policySpec.version}
                description={policySpec.description}
                applicableFlows={policySpec.applicableFlows}
                supportedApiTypes={policySpec.supportedApiTypes}
                isViewMode
            />
            <Divider light />
            {/* Gateway specific details of policy */}
            <SourceDetails
                supportedGateways={policySpec.supportedGateways}
                isViewMode
                policyId={policySpec.id}
                isAPISpecific={policySpec.isAPISpecific}
            />
            <Divider light />
            {/* Attributes of policy */}
            <PolicyAttributes
                policyAttributes={getPolicyAttributes()}
                isViewMode
            />
            <Box>
                <Button variant='contained' color='primary' data-testid='done-view-policy-file' onClick={onDone}>
                    <FormattedMessage
                        id='Apis.Details.Policies.PolicyForm.PolicyViewForm.done'
                        defaultMessage='Done'
                    />
                </Button>
            </Box>
        </Paper>
    );
};

export default PolicyViewFormShared;
