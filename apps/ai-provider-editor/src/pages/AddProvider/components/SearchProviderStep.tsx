import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
  Field,
  FieldLabel,
  InputGroup,
  InputLeftElement,
  Button,
} from "@in-need-of-time/ui";
import { US_STATES } from "@in-need-of-time/utils";

export function SearchProviderStep() {
  const [providerName, setProviderName] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="flex max-w-[560px] flex-col space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900">Add a provider</h1>
        <p className="text-center text-slate-600">
          Start with the provider's name and the state they operate in. The research agent will find and pre-fill the
          rest
        </p>
      </div>
      <Card className="space-y-6 p-6">
        <div className="flex flex-row gap-4">
          <Field className="flex-[7]">
            <FieldLabel htmlFor="provider-name">Provider Name</FieldLabel>
            <InputGroup>
              <InputLeftElement>
                <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
              </InputLeftElement>
              <Input
                placeholder="e.g. St.Austin's Day Care"
                name="provider-name"
                id="provider-name"
                className="pl-10"
                value={providerName}
                onChange={(e) => setProviderName(e.target.value)}
              />
            </InputGroup>
          </Field>
          <Field className="flex-[3]">
            <FieldLabel htmlFor="state">State</FieldLabel>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger id="state">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
        <div className="flex flex-row space-x-4">
          <p className="text-sm text-slate-500">
            State narrows the seach so the agent doesn't match a same named provider elsewhere
          </p>
          <Button className="ml-auto" variant="light" disabled={!providerName}>
            Search & Autofill
          </Button>
        </div>
      </Card>
    </div>
  );
}
